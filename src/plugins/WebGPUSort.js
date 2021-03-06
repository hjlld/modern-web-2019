import { MAX_THREAD_NUM, shader1, shader2 } from './ComputeShaderCode.wgsl';

export class WebGPUSort {

    constructor() {

        if (!navigator.gpu) {

            throw new Error('WebGPU not supported!');

        }

    }

    async Init() {

        this.adapter = await navigator.gpu.requestAdapter({

            powerPreference: 'high-performance'

        });

        if (!this.adapter) {

            throw new Error('Adapter init failed!');

        }

        this.device = await this.adapter.requestDevice();

    }

    Validate( array ) {

        let length = array.length;

        for (let i = 0; i < length; i++) {

            if (i !== length - 1 && array[i] > array[i + 1]) {

                console.error('validation error:', i, array[i], array[i + 1]);

                return false;

            }
        }

        return true;

    }

    async Run(array) {

        let startTime = performance.now();

        if (!this.device) {

            throw new Error('Device not found!');

        }

        let length = array.length;

        let byteLength = array.byteLength;

        let threadgroupsPerGrid = Math.max(1, length / MAX_THREAD_NUM);

        let inputBuffer = this.device.createBuffer({

            label: 'input',
            mappedAtCreation: true,
            size: byteLength,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST

        });

        let inputRange = inputBuffer.getMappedRange();

        new Float32Array(inputRange).set(array);

        inputBuffer.unmap();

        let shaderModule1 = this.device.createShaderModule({

            label: 'shader1',
            code: shader1

        });

        let bindGroupLayout1 = this.device.createBindGroupLayout({

            entries: [

                {
                    binding: 0,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: {
                        type: 'storage'
                    }
                }

            ]

        });

        let pipelineLayout1 = this.device.createPipelineLayout({

            bindGroupLayouts: [ bindGroupLayout1 ]

        });
        
        let pipeline1 = await this.device.createComputePipelineAsync({

            label: 'pipeline1',

            compute: {

                module: shaderModule1,
                entryPoint: 'main'

            },

            layout: pipelineLayout1

        });

        let bindGroup1 = this.device.createBindGroup({

            layout: bindGroupLayout1,

            entries: [

                {
                    binding: 0,
                    resource: {
                        buffer: inputBuffer
                    }
                }

            ]

        });

        let commandEncoder = this.device.createCommandEncoder();

        let passEncoder = commandEncoder.beginComputePass();

        passEncoder.setPipeline(pipeline1);

        passEncoder.setBindGroup(0, bindGroup1);

        passEncoder.dispatch(threadgroupsPerGrid, 1, 1);

        passEncoder.endPass();

        this.device.queue.submit( [ commandEncoder.finish() ] );

        let uniform = new Uint32Array([0, 0, 0, 0]);

        let uniformBuffer = this.device.createBuffer({

            size: 16,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST

        });

        
        let shaderModule2 = this.device.createShaderModule({

            label: 'shader2',
            code: shader2

        });
        
        let bindGroupLayout2 = this.device.createBindGroupLayout({

            entries: [

                {
                    binding: 0,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: {
                        type: 'uniform'
                    }
                },

                {
                    binding: 1,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: {
                        type: 'storage'
                    }
                }

            ]

        });

        let pipelineLayout2 = this.device.createPipelineLayout({

            bindGroupLayouts: [ bindGroupLayout2 ]

        });
        
        let pipeline2 = await this.device.createComputePipelineAsync({

            label: 'pipeline2',

            compute: {

                module: shaderModule2,
                entryPoint: 'main'

            },

            layout: pipelineLayout2

        });

        let bindGroup2 = this.device.createBindGroup({

            layout: bindGroupLayout2,

            entries: [
                
                {
                    binding: 0,
                    resource: {
                        buffer: uniformBuffer
                    }
                },

                {
                    binding: 1,
                    resource: {
                        buffer: inputBuffer
                    }
                }

            ]

        });

        if (threadgroupsPerGrid > 1) {

            for (let k = threadgroupsPerGrid; k <= length; k = k << 1) {

                for (let j = k >> 1; j > 0; j = j >> 1) {

                    let commandEncoder2 = this.device.createCommandEncoder();

                    let passEncoder2 = commandEncoder2.beginComputePass();
            
                    passEncoder2.setPipeline(pipeline2);

                    passEncoder2.setBindGroup(0, bindGroup2);

                    uniform[ 0 ] = k;

                    uniform[ 1 ] = j;
                    
                    this.device.queue.writeBuffer(uniformBuffer, 0, uniform);

                    passEncoder2.dispatch(threadgroupsPerGrid, 1, 1);

                    passEncoder2.endPass();

                    this.device.queue.submit( [ commandEncoder2.finish() ] );

                }

            }

        }

        let lastCommandEncoder = this.device.createCommandEncoder();

        let resultBufferToRead = this.device.createBuffer({

            size: byteLength,

            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ

        });

        lastCommandEncoder.copyBufferToBuffer(inputBuffer, 0, resultBufferToRead, 0, byteLength);

        this.device.queue.submit( [ lastCommandEncoder.finish() ] );

        await resultBufferToRead.mapAsync(GPUMapMode.READ);

        let resultMappedRange = resultBufferToRead.getMappedRange();

        let result = new Float32Array(resultMappedRange);

        return { array: result, costTime: performance.now() - startTime };

    }

    Dispose() {

        this.device.destroy();

    }



}
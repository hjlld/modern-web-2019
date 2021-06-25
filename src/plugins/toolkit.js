export class HTTP {

    static Get( url, params, responseType ) {

        let param = new URLSearchParams();

        if ( params ) {

            Object.keys( params ).forEach( key => param.append( key, params[key] ) );

        }

        return fetch( url, param )

        .then( response => {

            if ( response.status >= 400 ) {

                throw new Error( 'Bad response from server!' )

            }

            return response

        })

        .then( result => {

            switch ( responseType ) {

                case 'arrayBuffer':

                    return result.arrayBuffer();

                case 'blob':

                    return result.blob();

                case 'text':

                return result.text();

                case 'json':
                default:
                    return result.json();

            }

        })

    }

}

const MAX_THREAD_NUM = 1024;
const MAX_GROUP_NUM = 2048;

export class GPUSort {

    constructor() {

        let canvas = document.createElement( 'canvas' );

        this.context = canvas.getContext( 'webgl2-compute' );

        const initializeResult = this.initializeComputeProgram();

        if ( !initializeResult ) {

            throw new Error( 'Cannot initialize compute program!' );
          
        }
      
    }

    compute( array ) {

        const now = performance.now();

        const length = array.length;
      
        const threadgroupsPerGrid = Math.max(1, length / MAX_THREAD_NUM);
      
        // create ShaderStorageBuffer
        const ssbo = this.context.createBuffer();
        this.context.bindBuffer(this.context.SHADER_STORAGE_BUFFER, ssbo);
        this.context.bufferData(this.context.SHADER_STORAGE_BUFFER, array, this.context.DYNAMIC_COPY);
        this.context.bindBufferBase(this.context.SHADER_STORAGE_BUFFER, 0, ssbo);
      
        // execute ComputeShader
        this.context.useProgram(this.bitonicSortProgram1);
        this.context.dispatchCompute(threadgroupsPerGrid, 1, 1);
        this.context.memoryBarrier(this.context.SHADER_STORAGE_BARRIER_BIT);
      
        if (threadgroupsPerGrid > 1) {
          for (let k = threadgroupsPerGrid; k <= length; k <<= 1) {
            for (let j = k >> 1; j > 0; j >>= 1) {
              // execute ComputeShader
              this.context.useProgram(this.bitonicSortProgram2);
              this.context.uniform4uiv(this.bitonicSortProgram2UniformLocation, new Uint32Array([k, j, 0, 0]));
              this.context.dispatchCompute(threadgroupsPerGrid, 1, 1);
              this.context.memoryBarrier(this.context.SHADER_STORAGE_BARRIER_BIT);
            }
          }
        }
      
        // get result
        const result = new Float32Array(length);
        this.context.getBufferSubData(this.context.SHADER_STORAGE_BUFFER, 0, result);
        const costTime = performance.now() - now;

        return {

            array: result,

            costTime: costTime

        }

    }

    initializeComputeProgram() {
        // ComputeShader source
        // language=GLSL
        const computeShaderSource1 = `#version 310 es
          layout (local_size_x = ${MAX_THREAD_NUM}, local_size_y = 1, local_size_z = 1) in;
          layout (std430, binding = 0) buffer SSBO {
            float data[];
          } ssbo;
          shared float sharedData[${MAX_THREAD_NUM}];
          
          void main() {
            sharedData[gl_LocalInvocationID.x] = ssbo.data[gl_GlobalInvocationID.x];
            memoryBarrierShared();
            barrier();
            
            uint offset = gl_WorkGroupID.x * gl_WorkGroupSize.x;
            
            float tmp;
            for (uint k = 2u; k <= gl_WorkGroupSize.x; k <<= 1) {
              for (uint j = k >> 1; j > 0u; j >>= 1) {
                uint ixj = (gl_GlobalInvocationID.x ^ j) - offset;
                if (ixj > gl_LocalInvocationID.x) {
                  if ((gl_GlobalInvocationID.x & k) == 0u) {
                    if (sharedData[gl_LocalInvocationID.x] > sharedData[ixj]) {
                      tmp = sharedData[gl_LocalInvocationID.x];
                      sharedData[gl_LocalInvocationID.x] = sharedData[ixj];
                      sharedData[ixj] = tmp;
                    }
                  }
                  else
                  {
                    if (sharedData[gl_LocalInvocationID.x] < sharedData[ixj]) {
                      tmp = sharedData[gl_LocalInvocationID.x];
                      sharedData[gl_LocalInvocationID.x] = sharedData[ixj];
                      sharedData[ixj] = tmp;
                    }
                  }
                }
                memoryBarrierShared();
                barrier();
              }
            }
            ssbo.data[gl_GlobalInvocationID.x] = sharedData[gl_LocalInvocationID.x];
          }
          `;
      
        // create WebGLProgram for ComputeShader
        this.bitonicSortProgram1 = this.createComputeProgram(computeShaderSource1);
        if (!this.bitonicSortProgram1) {
          return false;
        }
      
        // language=GLSL
        const computeShaderSource2 = `#version 310 es
          layout (local_size_x = ${MAX_THREAD_NUM}, local_size_y = 1, local_size_z = 1) in;
          layout (std430, binding = 0) buffer SSBO {
            float data[];
          } ssbo;
          uniform uvec4 numElements;
          
          void main() {
             float tmp;
            uint ixj = gl_GlobalInvocationID.x ^ numElements.y;
            if (ixj > gl_GlobalInvocationID.x)
            {
              if ((gl_GlobalInvocationID.x & numElements.x) == 0u)
              {
                if (ssbo.data[gl_GlobalInvocationID.x] > ssbo.data[ixj])
                {
                  tmp = ssbo.data[gl_GlobalInvocationID.x];
                  ssbo.data[gl_GlobalInvocationID.x] = ssbo.data[ixj];
                  ssbo.data[ixj] = tmp;
                }
              }
              else
              {
                if (ssbo.data[gl_GlobalInvocationID.x] < ssbo.data[ixj])
                {
                  tmp = ssbo.data[gl_GlobalInvocationID.x];
                  ssbo.data[gl_GlobalInvocationID.x] = ssbo.data[ixj];
                  ssbo.data[ixj] = tmp;
                }
              }
            }
          }
          `;
      
        // create WebGLProgram for ComputeShader
        this.bitonicSortProgram2 = this.createComputeProgram(computeShaderSource2);
        if (!this.bitonicSortProgram2) {
          return false;
        }
        this.bitonicSortProgram2UniformLocation = this.context.getUniformLocation(this.bitonicSortProgram2, 'numElements');
      
        return true;
      };
      
    createComputeProgram(source) {
      // create WebGLShader for ComputeShader
      const computeShader = this.context.createShader(this.context.COMPUTE_SHADER);
      this.context.shaderSource(computeShader, source);
      this.context.compileShader(computeShader);
      if (!this.context.getShaderParameter(computeShader, this.context.COMPILE_STATUS)) {
        console.log(this.context.getShaderInfoLog(computeShader));
        return null;
      }
    
      // create WebGLProgram for ComputeShader
      const computeProgram = this.context.createProgram();
      this.context.attachShader(computeProgram, computeShader);
      this.context.linkProgram(computeProgram);
      if (!this.context.getProgramParameter(computeProgram, this.context.LINK_STATUS)) {
        console.log(this.context.getProgramInfoLog(computeProgram));
        return null;
      }
    
      return computeProgram;
    };

}
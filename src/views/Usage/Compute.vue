<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    并行计算 - <del>WebGL 2.0</del> WebGPU Compute Shader
                </v-flex>
                <v-flex xs12 class="display-1 font-weight-light text-center">
                    双调排序 - 這是一种可以并行计算的排序方法
                </v-flex>
                <v-flex xs4>
                    <v-card hover>
                        <highlight-code :code="cpuCode"></highlight-code>
                    </v-card>
                </v-flex>
                <v-flex xs8 >
                    <v-card hover>
                        <highlight-code :code="gpuCode"></highlight-code>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-btn block color="primary" light @click.stop="dialog = true">Run Benchmark</v-btn>
                   <v-dialog v-model="dialog" persistent max-width="800">
                        <v-card flat>
                            <v-container grid-list-xs>
                                <v-layout row wrap>
                                    <v-flex xs6 class="text-center">
                                        <div class="title">CPU Sort</div>
                                        <v-btn color="primary" @click="computeCPU()">Start Sorting</v-btn>
                                        <div class="display-2 mt-3" v-if="cpuTime !== 0">{{ Math.round( cpuTime ) }} ms</div>
                                    </v-flex>
                                    <v-flex xs6 class="text-center">
                                        <div class="title">GPU Sort</div>
                                        <v-btn color="primary" @click="computeGPU()">Start Sorting</v-btn>
                                        <div class="display-2 mt-3" v-if="gpuTime !== 0">{{ Math.round( gpuTime ) }} ms</div>
                                    </v-flex>
                                    <v-flex xs12 class="text-center mt-3">
                                        <div class="subheader mb-3" style="font-family: Consola;">Array.length = Math.pow( 2, 21 );  <span class="grey--text">//2097152</span></div>
                                        <v-btn color="accent" @click="randomizeArray()" text>Randomize Array</v-btn>
                                    </v-flex>
                                    <v-flex xs12 style="height: 300px; overflow-y: auto;" class="ma-3">
                                        {{ textArray }}
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click.native="dialog = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import { WebGPUSort } from '../../plugins/WebGPUSort';
import HighlightCode from '../../components/HighlightCode';

export default {

    components: {

        'highlight-code': HighlightCode

    },

    data: () => ({

        dialog: false,

        array: new Float32Array( Math.pow( 2, 21 ) ),

        textArray: '',

        cpuTime: 0,

        gpuTime: 0,

        GPUSort: undefined,

        cpuCode: `
    Array.sort( 
        
        ( a, b ) => {

            return a - b

        }

    ); `,

        gpuCode: `
this.adapter = await navigator.gpu.requestAdapter({
    powerPreference: 'high-performance'
});
this.device = await this.adapter.requestDevice();
let commandEncoder = this.device.createCommandEncoder();
let passEncoder = commandEncoder.beginComputePass();
    ...
passEncoder.dispatch(threadgroupsPerGrid, 1, 1);
    `

    }),

    mounted: async function() {

        this.GPUSort = new WebGPUSort();

        await this.GPUSort.Init();

    },

    methods: {

        randomizeArray() {

            this.cpuTime = 0;

            this.gpuTime = 0;

            for ( let i = 0; i < this.array.length; ++ i ) {

                this.array[ i ] = Math.random();

            }

            this.arrayToText( this.array );

        },

        arrayToText( array ) {

            let LENGTH = 100;

            let slicedArray = array.slice( 0, LENGTH );

            this.textArray = ''

            for ( let i = 0; i < slicedArray.length; ++ i ) {

                 this.textArray += `${ slicedArray[ i ].toString() }, `

            }

        },

        computeCPU() {

            this.cpuTime = 0;

            let cpuArray = this.array.slice( 0 );

            let startTime = performance.now();

            cpuArray.sort( ( a, b ) => {

                return a - b;

            })

            this.cpuTime = performance.now() - startTime;

            this.arrayToText( cpuArray );

        },

        async computeGPU() {

            let gpuArray = this.array.slice( 0 );

            let result = await this.GPUSort.Run( gpuArray );

            this.gpuTime = result.costTime;

            this.arrayToText( result.array );

        },

        validateSorted( array ) {

            let length = array.length;

            for (let i = 0; i < length; i++) {

                if (i !== length - 1 && array[i] > array[i + 1]) {

                    console.log('validation error:', i, array[i], array[i + 1]);

                    return false;

                }
            }

            return true;
        }

    }
}
</script>
<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-3 font-weight-light text-center mb-5">
                    并行計算 - WebGL 2.0 Compute Shader
                </v-flex>
                <v-flex xs12 class="title font-weight-light text-center">
                    雙調排序 - 這是一種可以并行計算的排序方法
                </v-flex>
                <v-flex xs6>
                    <v-card hover>
                        <v-img
                            contain
                            src="/img/cpu_sort.png" 
                            height="300px">
                        </v-img>
                        <v-container fill-height fluid class="black--text">
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    CPU Sort
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-flex xs6>
                    <v-card hover>
                        <v-img
                            contain
                            src="/img/gpu_sort.png" 
                            height="300px">
                        </v-img>
                        <v-container fill-height fluid class="black--text">
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    GPU Sort
                                </v-flex>
                            </v-layout>
                        </v-container>
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
import { GPUSort } from '../../plugins/toolkit';

export default {

    data: () => ({

        dialog: false,

        array: new Float32Array( Math.pow( 2, 21 ) ),

        textArray: '',

        cpuTime: 0,

        gpuTime: 0,

        GPUSort: undefined

    }),

    mounted: function() {

        this.GPUSort = new GPUSort();

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

        computeGPU() {

            let gpuArray = this.array.slice( 0 );

            let result = this.GPUSort.compute( gpuArray );

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
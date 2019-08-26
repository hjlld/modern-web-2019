<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5">
                    <a href="https://webassembly.org/" target="_blank">Web Assembly</a>
                </v-flex>
                <v-flex xs12 class="display-1">
                    強推 <a href="https://assemblyscript.org/" target="_blank">Assembly Script</a>，一個嚴格模式下的 TypeScript 的子集！
                </v-flex>
                <v-flex xs4>
                    <highlight-code :code="jsCode" fontClass="headline"></highlight-code>
                </v-flex>
                <v-flex xs4>
                    <highlight-code :code="tsCode" fontClass="headline"></highlight-code>
                </v-flex>
                <v-flex xs4>
                    <highlight-code :code="asCode" fontClass="headline"></highlight-code>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import HighlightCode from '../../components/HighlightCode';

export default {

    components: {

        'highlight-code': HighlightCode

    },

    data: () => ({

        jsCode: `
    // fib.js

    function fib( n ) {

        let a = 0, b = 1;

        for ( let i = 0; i < n; i++ ) {

            let t = a + b; a = b; b = t;

        }

        return b;

    }
        `,

        tsCode: `
    // fib.ts

    function fib( n: number ) {

        let a = 0, b = 1;

        for ( let i = 0; i < n; i++ ) {

            let t = a + b; a = b; b = t;

        }

        return b;

    }
        `,

        asCode: `
    // fib.ts

    function fib( n: i32 ): i32 {

        let a: i32 = 0, b: i32 = 1;

        for ( let i = 0; i < n; i++ ) {

            let t = a + b; a = b; b = t;

        }

        return b;

    }
        `


    })

}
</script>
<style scoped>
</style>
<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a>
                </v-flex>
                <v-flex xs12 class="display-1">
                    <code> `<` </code>，懶人必備！
                </v-flex>
                <v-flex xs8>
                    <highlight-code :code="mainCode" fontClass="headline"></highlight-code>
                </v-flex>
                <v-flex xs4>
                    <highlight-code :code="workerCode" fontClass="headline"></highlight-code>
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

        mainCode: `
    // main.js

    import { wrap, transfer } from 'comlink';

    let wrapper = wrap( new Worker( './worker.js' ) );

    let myClass = await new wrapper();

    await myClass.doSomething( transfer( typedArray, [ typedArray.buffer ] ) );

    
        `,

        workerCode: `
    // worker.js

    import { expose } from 'comlink';

    class myClass {

        doSomething( typedArray ) {}

    }

    expose( myClass, self );
        `


    })

}
</script>
<style scoped>
</style>
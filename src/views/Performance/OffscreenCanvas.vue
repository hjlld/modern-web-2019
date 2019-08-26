<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5">
                    <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/OffscreenCanvas" target="_blank">Offscreencanvas</a>
                </v-flex>
                <v-flex xs12>
                    <highlight-code :code="code"></highlight-code>
                </v-flex>
                <v-flex xs12 class="display-1">
                    <div>默認支援此特性：Chrome 69、Microsoft Edge Chromium</div>
                    <div>需要特別設置：Firefox <code>gfx.offscreencanvas.enabled = true</code></div>
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

        code: `
        let canvas = document.createElement( 'canvas' );

        let offscreen = canvas.transferControlToOffscreen();

        worker.postMessage( offscreen, [ offscreen ] );
        `,


    })

}
</script>
<style scoped>
</style>
<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a>
                </v-flex>
                <v-flex xs12 class="display-1">
                    <code>&lt;model-viewer&gt;</code>，懶人必備！
                </v-flex>
                <v-flex xs12 class="display-1">
                    <a href="https://github.com/GoogleWebComponents" target="_blank">GoogleWebComponents</a> / <a href="https://github.com/GoogleWebComponents/model-viewer" target="_blank">model-viewer</a>
                </v-flex>
                <v-flex xs6>
                    <highlight-code :code="code" fontClass="headline"></highlight-code>
                </v-flex>
                <v-flex xs6 fill-height style="height: 500px;">
                    <model-viewer src="/Model/YoungPriestess/scene.gltf" alt="A 3D model of an astronaut" camera-controls background-color="#628fb0" preload class="google-model-viewer"></model-viewer>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import '@google/model-viewer';
import HighlightCode from '../../components/HighlightCode';

export default {

    components: {

        'highlight-code': HighlightCode

    },

    data: () => ({

        code: `
    import '@google/model-viewer';

    <model-viewer 
        src="/Model/LittleTokyo/scene.gltf" 
        alt="A 3D model of manga girl" 
        camera-controls 
        background-color="#628fb0" 
        preload 
        class="google-model-viewer"
    ></model-viewer>
        `,
    })

}
</script>
<style scoped>
.google-model-viewer {

    width: 100%;

    height: 100%;

    outline: none;

    touch-action: none;

}
</style>
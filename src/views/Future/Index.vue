<template>
    <v-container grid-list-xs fill-height fluid style="background-color: #16496F;">
        <v-layout row>
            <v-flex xs12>
                <div class="display-4 font-weight-light text-center white--text float-center" style="margin-top: 40vh; margin-left: 30vw; position: absolute; z-index: 1">網頁圖形的未來</div>
                <model-viewer src="/Model/Cuphead/scene.gltf" autoplay background-color="#16496F" preload class="google-model-viewer"  camera-orbit="0deg 75deg 0m"></model-viewer>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import '@google/model-viewer';
export default {
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
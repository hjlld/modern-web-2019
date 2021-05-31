<template>
    <v-container grid-list-xs fill-height fluid style="background-color: #83c2f0;">
        <v-layout row>
            <v-flex xs6>
                <div class="display-4 font-weight-light text-center" style="margin-top: 40vh;">课程规划</div>
            </v-flex>
            <v-flex xs6>
                <model-viewer src="/Model/LittleTokyo/scene.gltf" camera-controls auto-rotate autoplay background-color="#83c2f0" camera-orbit="-10m -10m" preload class="google-model-viewer"></model-viewer>
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
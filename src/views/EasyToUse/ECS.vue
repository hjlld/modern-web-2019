<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5 text-center">
                    組件化的開發庫
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    <ul style="line-height: 80px;">
                        <li class="mb-3"><a href="https://aframe.io/" target="_blank">A-Frame</a> 專注於 VR 開發的組件化框架，基於 Three.js，Mozilla 出品</li>
                        <li class="mb-3"><a href="https://github.com/Beg-in/vue-babylonjs" target="_blank">Vue-Babylon</a> 封裝成 Vue 組件的 Babylon.js，個人開發，維護不太頻繁</li>
                        <li class="mb-3"><a href="https://github.com/drcmda/react-three-fiber" target="_blank">React Three Fiber</a> 封裝成 React 組件的 Three.js，維護頻繁</li>
                        <li class="mb-3"><a href="https://github.com/sveltejs/gl" target="_blank">@sveltejs/gl</a> 封裝成 Svelte 組件的 WebGL 接口，由著名的“造輪子哥” Rich Harris 開發，仍處於非常早期的階段</li>
                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
export default {
}
</script>
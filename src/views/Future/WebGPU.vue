<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5 text-center">
                    <a href="https://webgpu.io" target="_blank">WebGPU</a>
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    <ul style="line-height: 80px;">
                        <li class="mb-3"> GPU for the Web</li>
                        <li class="mb-3"> 新的底層接口，開放更多 GPU 能力，接近 Metal / Vulkan / DirectX 12</li>
                        <li class="mb-3"> 新的著色器語言（WHLSL VS SPIR-V）</li>
                        <li class="mb-3"> 新的操作系統和底層硬件兼容性</li>
                    </ul>
                </v-flex>
                <v-flex xs12 class="display-1">
                    Babylon.js 成為首個實現 WebGPU 的 3D 引擎， <a href="https://weibo.com/tv/v/Htw2V2Ts1?fid=1034:4370346565110696" target="_blank">視頻對比 WebGL VS WebGPU</a>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
export default {
}
</script>
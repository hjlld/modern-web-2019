<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="font-weight-light text-center mb-5 text-center">
                    <div class="display-4 mb-3">Atwood's Law</div>
                    <blockquote class="display-2 font-italic grey--text">Any application that can be written in JavaScript, will eventually be written in JavaScript.</blockquote>
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    <ul style="line-height: 80px;">
                        <li class="mb-3"> <a href="https://github.com/BabylonJS/BabylonNative" target="_blank">Babylon.js Native</a></li>
                        <li class="mb-3"> <a href="https://github.com/maierfelix/nvk" target="_blank">Vulkan for Node.js</a></li>
                        <li class="mb-3"> 使用 C++ 封装底层接口，JavaScript 运行在 Node.js N-API 线程，使用 ANGLE 或 SPIRV-Cross 转换着色器代码</li>
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
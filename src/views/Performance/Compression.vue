<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5 text-center">
                    当前 WebGL 渲染 3D 模型的不二选择！
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    网络传输与显存、内存占用之间的体积平衡艺术
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    压缩率与解压缩效率之间的性能平衡艺术
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    纹理压缩：<a href="https://github.com/BinomialLLC/basis_universal" target="_blank">Universal Basis</a>
                    <v-btn text large color="accent" @click="dialog = true">与其他格式的对比</v-btn>
                    <v-dialog
                        v-model="dialog"
                        max-width="100vw"
                        transition="dialog-transition"
                    >
                        <v-img src="/modern-web-2019/img/basis.png"></v-img>
                    </v-dialog>
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    几何体压缩：<a href="https://github.com/google/draco" target="_blank">Draco</a>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
export default {
    
    data: () => ({

        dialog: false

    })
}
</script>
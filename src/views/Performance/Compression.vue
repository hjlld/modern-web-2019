<template>
    <v-content class="ma-0 pa-0 grey-lighten-1">
        <v-container grid-list-xl fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center mb-5 text-center">
                    當前 WebGL 渲染 3D 模型的不二選擇！
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    網絡傳輸與顯存、內存佔用的體積平衡
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    壓縮率與解壓縮效率的性能平衡
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    紋理壓縮：<a href="https://github.com/BinomialLLC/basis_universal" target="_blank">Universal Basis</a>
                    <v-btn text large color="accent" @click="dialog = true">與其他格式的對比</v-btn>
                    <v-dialog
                        v-model="dialog"
                        max-width="100vw"
                        transition="dialog-transition"
                    >
                        <v-img src="/img/basis.png"></v-img>
                    </v-dialog>
                </v-flex>
                <v-flex xs12 class="display-3 font-weight-light mb-5">
                    幾何體壓縮：<a href="https://github.com/google/draco" target="_blank">Draco</a>
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
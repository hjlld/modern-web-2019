<template>
    <v-content class="ma-0 pa-0">
        <v-container grid-list-xs fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-light text-center vfx-text">
                    請在網頁中使用 3D
                </v-flex>
            </v-layout>
        </v-container>
        <shader-background id="2DCloud"></shader-background>
    </v-content>
</template>

<script>
import ShaderBackground from '../components/ShaderBackground';

export default {
    components: {

      'shader-background': ShaderBackground

    }

};
</script>

<style scoped>
.vfx-text {
    color: #FFFFFF;
    text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;
}

</style>
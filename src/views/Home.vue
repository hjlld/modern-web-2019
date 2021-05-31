<template>
    <v-content class="ma-0 pa-0">
        <v-container grid-list-xs fill-height>
            <v-layout row wrap justify-center align-center align-content-center>
                <v-flex xs12 class="display-4 font-weight-bold text-center vfx-text">
                    WebGL 的现状与未来
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
    color: #000000;
    text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, rgb(142, 187, 255) 0px 0px 20px, rgb(90, 159, 223) 0px 0px 30px, rgb(45, 195, 255) 0px 0px 40px, rgb(45, 136, 255) 0px 0px 50px, rgb(45, 160, 255) 0px 0px 75px;
}

</style>
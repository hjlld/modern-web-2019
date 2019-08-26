<template>
    <div ref="__Model_Background_container" class="canvas-container">
        <canvas ref="__Model_Background_renderCanvas" class="render-canvas"></canvas>
    </div>
</template>
<script>
import { wrap, transfer } from 'comlink';
import { ModelRenderer } from '../plugins/ModelRenderer'

export default {

    data: () => ({

        modelRenderer: undefined

    }),

    props: {

        id: {

            type: String,

            required: true

        }

    },

    mounted: async function() {

        let container = this.$refs.__Model_Background_container;

        let parentElement = container.parentElement;

        parentElement.style.position = 'relative';

        let canvas = this.$refs.__Model_Background_renderCanvas;

        this.modelRenderer = new ModelRenderer( this.id, canvas, canvas.clientWidth, canvas.clientHeight );

        this.modelRenderer.loadModel()

        .then( () => {

            this.modelRenderer.startRender()

        })



        // let wrappedWorker = wrap( new Worker( './worker/OffscreenModelRenderer.js', { name: 'OffsrceenModelRenderer-Worker', type: 'module' } ) );

        // this.offscreenModelRenderer = await new wrappedWorker( this.id, transfer( offscreen, [ offscreen ] ), canvas.clientWidth, canvas.clientHeight );

        // this.offscreenModelRenderer.startRender();

    },

    beforeDestroy: async function () {


        
    }

}
</script>
<style scoped>
.canvas-container {

    position: absolute;

    width: 100%;

    height: 100%;

    top: 0;

    left: 0;

    z-index: -1;

}

.render-canvas {

    width: 100%;

    height: 100%;

    outline: none;

}


</style>
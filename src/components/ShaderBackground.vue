<template>
    <div ref="__Shader_Background_container" class="canvas-container">
        <canvas ref="__Shader_Background_renderCanvas" class="render-canvas"></canvas>
    </div>
</template>
<script>
import { HTTP } from '../plugins/toolkit';
import { wrap, transfer } from 'comlink';

export default {

    data: () => ({

        offscreenShaderRenderer: undefined

    }),

    props: {

        id: {

            type: String,

            required: true

        }

    },

    mounted: async function() {

        let container = this.$refs.__Shader_Background_container;

        let parentElement = container.parentElement;

        parentElement.style.position = 'relative';

        let canvas = this.$refs.__Shader_Background_renderCanvas;

        let offscreen = canvas.transferControlToOffscreen();

        let wrappedWorker = wrap( new Worker( './worker/OffscreenShaderRenderer.js', { name: 'OffscreenShaderRenderer-Worker', type: 'module' } ) );

        this.offscreenShaderRenderer = await new wrappedWorker( this.id, transfer( offscreen, [ offscreen ] ), canvas.clientWidth, canvas.clientHeight );

        this.offscreenShaderRenderer.initShader()

        .then( () => {

            this.offscreenShaderRenderer.startRender();

        })

    },

    beforeDestroy: async function () {

        if ( this.offscreenShaderRenderer ) {

            await this.offscreenShaderRenderer.close();

        }
        
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
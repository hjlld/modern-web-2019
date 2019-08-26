import { Engine, Scene, SceneLoader } from '@babylonjs/core';

export class ModelRenderer {

    constructor( id, canvas, width, height ) {
    
        this.engine = new Engine( canvas, true );

        this.engine.setSize( width, height );

        this.scene = new Scene( this.engine );

        this.id = id;

    }

    loadModel() {

        return SceneLoader.AppendAsync( `/Model/${ this.id }/`, 'scene.gltf', this.scene )

        .then( () => {

            this.scene.createDefaultCameraOrLight( true, true, true );

        })

    }

    startRender() {

        this.engine.runRenderLoop( () => {

            this.scene.render();

        })

    }



}
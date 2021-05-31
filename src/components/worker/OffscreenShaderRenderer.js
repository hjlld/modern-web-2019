import { WebGLRenderer, Scene, OrthographicCamera, PlaneBufferGeometry, Vector3, Vector4, ShaderMaterial, Mesh } from 'three/build/three.module'; 
import { HTTP } from '../../plugins/toolkit';
import { expose } from 'comlink';

class OffscreenShaderRenderer {

    constructor( id, canvas, width, height ) {

        this.iTime = 0;

        this.id = id;

        this.renderer = new WebGLRenderer( { canvas } );

        this.renderer.setSize( width, height, false );

        this.scene = new Scene();

        this.camera = new OrthographicCamera(
            -width / 2 , // left
             width / 2 , // right
             height / 2, // top
            -height / 2, // bottom
            -1, // near,
             1, // far
          );

        const plane = new PlaneBufferGeometry( width, height );

        const uniforms = {

            iTime: { value: 0 },
            iResolution:  { value: new Vector3( width, height, 1 ) },
            iMouse: { value: new Vector4() }
            
        };

        this.material = new ShaderMaterial();

        this.material.uniforms = uniforms;

        const mesh = new Mesh( plane, this.material )

        this.scene.add( mesh );

    }

    async initShader() {

        //let vs = await HTTP.Get( '/Shader/fs.glsl', null, 'text' );

        let fs = await HTTP.Get( `/modern-web-2019/Shader/${ this.id }.glsl`, null, 'text' );

        fs = this.parseShader( fs );

        this.material.fragmentShader = fs;

        this.scene.onBeforeRender = () => {


        }

        // scene.onPointerMove = ( event ) => {

        //     let x = ( event.clientX / width ) * 2 - 1;

        //     let y = ( event.clientY / width ) * 2 + 1;

        //     shader.setVector2( 'iMouse', new BABYLON.Vector2( x, y ) );

        // }

    }

    startRender() {

        this.renderer.render( this.scene, this.camera );

        this.material.uniforms.iTime.value += 0.016;

        requestAnimationFrame( () => {

            this.startRender( );

        })

    }

    parseShader( shader ) {

        let result = shader.replace( /mainImage/g, 'main');

        result = result.replace( /out vec4 fragColor, in vec2 fragCoord/g, '');

        result = result.replace( /fragColor/g, 'gl_FragColor');

        result = result.replace( /fragCoord/g, 'gl_FragCoord');

        result = `
            precision lowp float;

            // Uniforms
            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec2 iMouse;

            ${ result }
        ` 

        return result;

    }

    close() {

        self.close();

    }

}

expose( OffscreenShaderRenderer, self );
import { WebGLRenderer, Scene, PerspectiveCamera, UnsignedByteType, Box3, Vector3 } from 'three/build/three.module'; 
import { EquirectangularToCubeGenerator } from 'three/examples/jsm/loaders/EquirectangularToCubeGenerator';
import { PMREMGenerator } from 'three/examples/jsm/pmrem/PMREMGenerator';
import { PMREMCubeUVPacker } from 'three/examples/jsm/pmrem/PMREMCubeUVPacker';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class ModelRenderer {

    constructor( id, canvas, width, height ) {

        this.id = id;

        this.renderer = new WebGLRenderer( { canvas } );

        this.renderer.setSize( width, height, false );

        this.scene = new Scene();

        this.camera = new PerspectiveCamera( 60, 1.0, 0.1, 10000 );

        this.controls = new OrbitControls( this.camera, canvas );

        new RGBELoader()

        .setDataType( UnsignedByteType )

        .setPath( '/Model/' )

        .load( 'env.hdr', ( texture ) => {

            let cubeGenerator = new EquirectangularToCubeGenerator( texture, { resolution: 1024 } );

            cubeGenerator.update( this.renderer );

            let pmremGenerator = new PMREMGenerator( cubeGenerator.renderTarget.texture );

            pmremGenerator.update( this.renderer );

            let pmremCubeUVPacker = new PMREMCubeUVPacker( pmremGenerator.cubeLods );

            pmremCubeUVPacker.update( this.renderer );

            let envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;

            let loader = new GLTFLoader().setPath( `/Model/${ this.id }/` );

            let box = new Box3();

            loader.load( 'scene.gltf', ( gltf ) => {

                gltf.scene.traverse( ( child ) => {

                    if ( child.isMesh ) {

                        child.material.envMap = envMap;

                    }

                } );

                this.scene.add( gltf.scene );

                box.setFromObject( gltf.scene );

            } );

            pmremGenerator.dispose();

            pmremCubeUVPacker.dispose();

            this.scene.background = cubeGenerator.renderTarget;

            console.log( box )

            this.fit( box );

        } );

    }

    fit( box ) {

        const fitRatio = 0.8;

        const size = new Vector3();
        box.getSize( size );

        const center = new Vector3();
        box.getCenter( center );
        
        const maxSize = Math.max( size.x, size.y, size.z );
        const fitHeightDistance = maxSize / ( 2 * Math.tan( Math.PI * this.camera.fov / 360 ) );
        const fitWidthDistance = fitHeightDistance * this.camera.aspect;        
        const distance = fitRatio * Math.max( fitHeightDistance, fitWidthDistance );
        
        const direction = this.controls.target.clone()
          .sub( this.camera.position )
          .normalize()
          .multiplyScalar( distance );
      
        this.controls.maxDistance = distance * 10;
        this.controls.target.copy( center );        
      
        this.camera.position.copy( this.controls.target ).sub( direction );        
        this.camera.updateMatrixWorld();        
        this.camera.updateProjectionMatrix();

        this.controls.update();


    }

    startRender() {

        this.renderer.render( this.scene, this.camera );

        requestAnimationFrame( () => {

            this.startRender();

        })

    }

}
import React from 'react';
import {  PerspectiveCamera , OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import space from '../../../assets/stars.jpg';

const Environment = () => {
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const spaceTexture = textureLoader.load(space);
    spaceTexture.wrapS = spaceTexture.wrapT = THREE.RepeatWrapping;
    spaceTexture.repeat.set(3,3);
  return (
    <>
         {/* Environment */}
        <mesh>
            <sphereGeometry args={[100, 100, 100]} />
            <meshBasicMaterial map={spaceTexture} attach={'material'} side={THREE.BackSide} />
        </mesh>
    </>
  )
}

export default Environment;
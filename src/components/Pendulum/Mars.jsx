import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import mars from '../../assets/mars.jpg';
import { useFrame } from '@react-three/fiber';

const Mars = () => {
    const marsRef = useRef();

    useFrame((state)=>{
      if(marsRef.current){
        marsRef.current.rotation.y += 0.0005;  
      }
    });
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(mars);
  return (
    <>
        <mesh position={[4,0,0]} ref={marsRef}>
            <sphereGeometry args={[0.25,32,32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Mars
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import sun from '../../../assets/8k_sun.jpg';
import { useFrame } from '@react-three/fiber';
const Sun = () => {
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load(sun);
    const sunRef = useRef();
    useFrame(()=>{
      if(sunRef.current){
        sunRef.current.rotation.y += 0.0001;
      }
    })

  return (
    <>
        <mesh position={[25,0,0]} ref={sunRef}>
            <sphereGeometry args={[12.5, 32, 32]} />
            <meshPhongMaterial map={sunTexture} attach={'material'} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Sun
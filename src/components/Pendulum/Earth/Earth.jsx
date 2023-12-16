import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earth from '../../../assets/earthmap.jpg';
import { useFrame } from '@react-three/fiber';
const Earth = () => {
    const earthRef = useRef();

    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earth);
    

    //renderer
    useFrame((state)=>{
        if(earthRef.current){
            earthRef.current.rotation.y += 0.001;  
        }
    });


  return (
    <>
        <mesh position={[0,0,0]} castShadow rotation={[0,0,0]} ref={earthRef}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide} />
        </mesh>
    </>
  )
}

export default Earth;
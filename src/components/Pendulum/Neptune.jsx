import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import neptune from '../../assets/neptune.jpg';
import { useFrame } from '@react-three/fiber';
const Neptune = () => {
    const neptuneRef = useRef();
    useFrame((state)=>{
        if(neptuneRef.current){
            neptuneRef.current.rotation.y += 0.0008;  
        } 
    });
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(neptune);
  return (
    <>
        <mesh position={[53,0,0]}  ref={neptuneRef}>
            <sphereGeometry args={[2,32,32]}/>
            <meshPhongMaterial map={texture} attach={'material'} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Neptune
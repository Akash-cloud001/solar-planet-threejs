import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import moon from '../../../assets/moon.jpg';
import { useFrame } from '@react-three/fiber';

const Moon = () => {
    const moonRef = useRef();

    useFrame((state)=>{
        if(moonRef.current){
            moonRef.current.position.x = -2 * Math.cos(state.clock.elapsedTime / 4) ;
            moonRef.current.position.z = 2 * Math.sin(state.clock.elapsedTime / 4) ; 
        }
        
    })

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(moon);
  return (
    <>
        <mesh position={[-2,0.5,0]} rotation={[0,90,0]} ref={moonRef}>
            <sphereGeometry args={[0.25, 32,32]}  />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Moon
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import uranus from '../../assets/uranus.jpg';
import uranusRing from '../../assets/uranusRing.jpg';
import { useFrame } from '@react-three/fiber';

const Uranus = () => {
    const uranusRef = useRef();
    const uranusRingRef = useRef();

    useFrame((state)=>{
        if(uranusRef.current){
        uranusRef.current.rotation.y += 0.0008;  
        }
        if(uranusRingRef.current){
        uranusRingRef.current.rotation.z += 0.0008;  
        }
    });
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(uranus);
    const ringTexture = textureLoader.load(uranusRing);
  return (
    <>
        <mesh position={[45,0,0]} ref={uranusRef}>
            <sphereGeometry args={[2,32,32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
        <mesh position={[45,0,0]} rotation={[90, -90, 50]} ref={uranusRingRef}>
            <ringGeometry args={[3.5, 3, 30, 30]} />
            <meshPhongMaterial map={ringTexture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
        
    </>
  )
}

export default Uranus
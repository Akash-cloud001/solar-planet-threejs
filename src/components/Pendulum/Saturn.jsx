import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import saturn from '../../assets/saturn.jpg';
import saturnRing from '../../assets/saturnRing.jpg';
import { useFrame } from '@react-three/fiber';

const Saturn = () => {
    const saturnRef = useRef();
    const saturnRingRef = useRef();

    useFrame((state)=>{
        if(saturnRef.current){
        saturnRef.current.rotation.y += 0.0007;  
        }
        if(saturnRingRef.current){
        saturnRingRef.current.rotation.z += -0.0007;  
        }
    });
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(saturn);
    const ringTexture = textureLoader.load(saturnRing);
    
  return (
    <>
        <mesh position={[30,0,0]} ref={saturnRef}>
            <sphereGeometry args={[3,32,32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
        <mesh position={[30,0,0]} rotation={[90, 0, -50]} ref={saturnRingRef}>
            <ringGeometry args={[7, 4, 30, 30]} />
            <meshPhongMaterial map={ringTexture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Saturn
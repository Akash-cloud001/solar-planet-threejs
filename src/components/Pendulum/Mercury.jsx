import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import mercury from '../../assets/mercury.jpg';
import { useFrame } from '@react-three/fiber';

const Mercury = () => {
    const mercuryRef = useRef();

    useFrame((state)=>{
        if(mercuryRef.current){
            mercuryRef.current.rotation.y += 0.0003;  
        } 
    });
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(mercury);
  return (
    <>
        <mesh position={[-7,0,0]} rotation={[0,90,0]} ref={mercuryRef}>
            <sphereGeometry args={[0.22, 32,32]}  />
            <meshPhongMaterial map={texture} attach={"material"}  side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Mercury
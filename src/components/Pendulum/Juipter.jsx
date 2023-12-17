import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import jupiter from '../../assets/jupiter.jpg';
import { useFrame } from '@react-three/fiber';

const Juipter = () => {
    const jupiterRef = useRef();

    useFrame((state)=>{
        if(jupiterRef.current){
        jupiterRef.current.rotation.y += 0.0006;  
        }
    });
    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(jupiter);
  return (
    <>
        <mesh position={[14,0,0]} ref={jupiterRef}>
            <sphereGeometry args={[4.5,32,32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Juipter
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import earth from '../../assets/earthmap.jpg';
import earthBump from '../../assets/earthbump1.jpg';
import earthCloud from '../../assets/earthCloud.png';
import { useFrame } from '@react-three/fiber';

const Earth = () => {
    const earthRef = useRef();
    const earthCloudRef = useRef();

    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(earth);
    const bumpTexture = textureLoader.load(earthBump);
    const cloudTexture = textureLoader.load(earthCloud);
    //renderer
    useFrame((state)=>{
        if(earthRef.current){
            earthRef.current.rotation.y += 0.0005;  
        }
        if(earthCloudRef.current){
            earthCloudRef.current.rotation.y += 0.0002;  
        }
    });


  return (
    <>
        <mesh position={[0,0,0]} castShadow rotation={[0,0,0]} ref={earthRef} >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial map={texture} bumpMap={bumpTexture} bumpScale={1}  attach={"material"} side={THREE.DoubleSide} metalness={0} roughness={1}/>
        </mesh>
        <mesh position={[0,0,0]} rotation={[0,0,0]} ref={earthCloudRef}>
            <sphereGeometry args={[0.51 , 32, 32]} />
            <meshPhongMaterial map={cloudTexture} transparent={true} attach={"material"} side={THREE.DoubleSide} />

        </mesh>
    </>
  )
}

export default Earth;
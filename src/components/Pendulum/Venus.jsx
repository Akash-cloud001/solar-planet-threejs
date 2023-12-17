import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import venus from '../../assets/venus.jpg';
import { useFrame } from '@react-three/fiber';

const Venus = () => {
    const venusRef = useRef();

    useFrame((state)=>{
      if(venusRef.current){
        venusRef.current.rotation.y += 0.0004;  
      }
  });

    //Load Texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(venus);
  return (
    <>
        <mesh position={[-4,0,0]} ref={venusRef}>
            <sphereGeometry args={[0.4,32,32]} />
            <meshPhongMaterial map={texture} attach={"material"} side={THREE.DoubleSide}/>
        </mesh>
    </>
  )
}

export default Venus;
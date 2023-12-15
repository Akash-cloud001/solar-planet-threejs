import React from 'react';
import {  PerspectiveCamera , OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import space from '../../assets/nightSky.jpg';
import Earth from './Earth/Earth';
import Moon from './Moon/Moon';
import Environment from './Environment/Environment';
const Pendulum = () => {

    
  return (
   <>

    {/* Camera */}
    <PerspectiveCamera makeDefault position={[0, 2.5, 4]} />
    <OrbitControls />

    {/* Lights */}
    <ambientLight args={["white", 2]} /> 
    <directionalLight 
      color="white" 
      intensity={2}  
      position={[-10, 0, 0]} 
    /> 

    {/* Earth mesh */}
    <Earth />
    
    {/* MoonMesh */}
    <Moon />

    {/* Environment */}
    <Environment />
   </>
  )
}

export default Pendulum;
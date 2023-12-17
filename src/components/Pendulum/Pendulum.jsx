import React, { useEffect, useRef } from 'react';
import {  PerspectiveCamera , OrbitControls} from '@react-three/drei';
import Earth from './Earth';
import Moon from './Moon';
import Environment from './Environment';
import './Pendulum.css';
import Sun from './Sun';
import Venus from './Venus';
import Mercury from './Mercury';
import Mars from './Mars';
import Juipter from './Juipter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';


const Pendulum = () => {
  const orbitRef = useRef();

  return (
   <>

    {/* Camera */}
    <PerspectiveCamera makeDefault position={[0, -1, 1]} />
    <OrbitControls minDistance={1} maxDistance={75} ref={orbitRef}/>

    {/* Lights */}
    <ambientLight args={["white", 2]} /> 
    <directionalLight 
      color="white" 
      intensity={2}  
      position={[-10, 0, 0]} 
    /> 

    <Sun />

    <Mercury />

    <Venus />

    <Earth />
    <Moon />

    <Mars />
    <Juipter />
    <Saturn />
    <Uranus />
    <Neptune />

    <Environment />
   </>
  )
}

export default Pendulum;
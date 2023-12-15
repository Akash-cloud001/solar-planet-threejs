import React, { useEffect, useRef, useState,Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import './App.css';
import Pendulum from './components/Pendulum/Pendulum';
import { Stats, OrbitControls, Environment } from '@react-three/drei'

const App = ({children, ...props}) => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState({width:window.innerWidth, height: window.innerHeight});
  

  const handleResize = ()=>{
      setSize({
          width: window.innerWidth,
          height: window.innerHeight
      })
  }

  useEffect(()=>{
      window.addEventListener('resize', handleResize);
      return ()=> window.removeEventListener('resize', handleResize);
  },[])

return (
  <Canvas
      shadows
      style={{width:'100%', height:size.height}}
      ref={canvasRef}
      onCreated={({gl, camera})=>{
          //set pixel ratio for better resolution as per the machine 
          gl.setPixelRatio(window.devicePixelRatio);
          
          //Adjust the camera aspect ratio as per the device
          camera.aspect = size.width / size.height;
          camera.updateProjectionMatrix();
      }}  
  >
      <Suspense fallback={null}>
          <Pendulum />
      </Suspense>
  </Canvas>
)
}

export default App
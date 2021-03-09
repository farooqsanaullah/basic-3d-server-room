import React from 'react'
import './index.css';
import './App.css';
import { Html } from "@react-three/drei"
import * as THREE from 'three'
import { Text } from "@react-three/drei/Text"
export default function Notification() {
  const TextComponent = ({ position, rotation, color, scale }) => {
   const bboxs= {
      color: '#ffaa33',
      side: THREE.DoubleSide,
      opacity: 0.5,
      transparent: true,
    }
    return (
      <mesh position={position} rotation={rotation} scale={scale } receiveShadow>
      
        {/* <Html attach="html" scaleFactor={6} >
            <div className="content">
              Electrical Circuit  100kw
            </div>
          </Html> */}
          
        <Text  attach="material" bevelEnabled={true}
          color={'black'}
          fontSize={'.16'}
          maxWidth={'.1'}
          bbox={bboxs}
          lineHeight={'1'}
          textAlign={'center'}

          anchorX="left"
          anchorY="left">
          Power 100KW
    </Text>


        <meshNormalMaterial attach="material" color={color} />
        
      </mesh>)
  }

  return (


    <group  position={[0, 2.3, -4]}>

      <TextComponent  position={[-3.1, 1.5, -.3]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 11, 0]} scale={[1 , 1 , 1]}  />
      
      <TextComponent  position={[-.08, 1.5, -.3]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 11, 0]} scale={[1 , 1 , 1]}  />
      
      <TextComponent  position={[2.9, 1.5, -.3]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 11, 0]} scale={[1 , 1 , 1]}  />
      
      {/* <TextComponent  position={[-1.1, 1.5, -.3]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 11, 0]} scale={[1 , 1 , 1]}  /> */}
      {/* <TextComponent  position={[3, 4, 4.5]}  speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]}   />
      <TextComponent  position={[0, 4, -4.5]}  speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]}   /> */}
      {/* <TextComponent position={[-5, 0.2, 0]}   scale={[2, .8, 2.5]} />
            <TextComponent position={[0, 0.2, 0]}   scale={[2, .8, 2.5]} /> */}
    </group>


  )
}

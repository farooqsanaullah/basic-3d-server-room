import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls } from 'drei';
import { useSpring, a } from 'react-spring/three';
import * as THREE from 'three'
import { Html } from "@react-three/drei"
import Notification from './Notification';
import ResponsiveText from './ResponsiveText';

import { withRouter } from 'react-router-dom';
softShadows();



const SpinningMesh = ({ position, rotation, color, scale }) => {

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [15.4, 5.4, 5.4] : [1, 1, 1],
  });


  return (
    <mesh position={position} rotation={rotation} scale={scale} receiveShadow>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}


function App({history}) {

  const [danger, setDanger] = useState("black");
  const [warning, setWarning] = useState("black");
  const [show, setShow] = useState(false);

  const [showNotification, hideNotification] = useState(false);


  const notification = () => {
    hideNotification(!showNotification);
  }

  const changeRouter = (props) => {
    {
           
    history.push(`/${1}`);
    }
  }

  const onchangeValue = (event) => {
    let request = event.target.value;
    if (request == 'temperament') {
      setDanger("red");
      setWarning("yellow");

    }
    else if (request == 'circuit') {

      setShow(true)
    }
    else {
      setDanger("black");
      setWarning("black");
      setShow(false)

    }
  }

  return (
    <>

      <div className="App">
        <select className="form-control" onChange={onchangeValue}>
          <option value="default">Default select</option>

          <option value="temperament">Temperament</option>

          <option value="circuit">Electrical Circuit</option>
        </select>
      </div>
      <Canvas shadowMap colorManagement camera={{ position: [-10, 5, 0], fov: 80 }} style={{ position: 'sticky', top: 0, background: '#C8CFD8' }}>

        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          intensity={1.5}
          position={[0, 10, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />


     
        {/* room */}
        <group position={[0, .3, 0]} >
          <group >
            <SpinningMesh position={[0, 0, 0]} color='white' speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]} scale={[10, .5, 10]} />

            <SpinningMesh position={[0, 1.5, 4.75]} color='white' speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[10, .5, 3]} />


            <SpinningMesh position={[0, 1.5, -4.75]} color='white' speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[10, .5, 3]} />


            <SpinningMesh position={[4.75, 1.5, 0]} color='white' speed={6} rotation={[THREE.Math.degToRad( 90), 0, THREE.Math.degToRad(90)]} scale={[10, .5, 3]} />

          </group>
          {/* room */}

          {/* rack  first*/}

          <group position={[0, 0, 4]} onClick={changeRouter} >

            <SpinningMesh position={[-3, 1.5, 0]} color={danger} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />

          </group>
          <group position={[0, 0, 4]}>


            <SpinningMesh position={[3, 1.5, 0]} color='black' speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
            <SpinningMesh position={[0, 1.5, 0]} color={warning} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
          </group>
          {/* rack  second*/}
          <group >
            <SpinningMesh position={[-3, 1.5, 0]} color={warning} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
            <SpinningMesh position={[3, 1.5, 0]} color={danger} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
            <SpinningMesh position={[0, 1.5, 0]} color='black' speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
          </group>
          {/* rack  third*/}
          <group position={[0, 0, -4]} onClick={notification.bind(!showNotification)}>
            <SpinningMesh position={[-3, 1.5, 0]} color={danger} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
          </group>
          <group position={[0, 0, -4]} >
            <SpinningMesh position={[3, 1.5, 0]} color={warning} speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
            <SpinningMesh position={[0, 1.5, 0]} color='black' speed={6} rotation={[THREE.Math.degToRad(90), 0, 0]} scale={[2, .8, 2.5]} />
          </group>
          {showNotification ? (<group position={[0, 2, -4]} >
            <SpinningMesh position={[-3, 1.5, 0]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]} scale={[.1, 1, 1]} />
          </group>) : null}

          <group position={[0, 2, -4]}>
            {/* <SpinningMesh position={[-3, 1.5, 0]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]} scale={[.1 , 1 , 1]} /> */}
            <SpinningMesh position={[3, 1.5, 0]} color={'lightgrey'} speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]} scale={[.1, 1, 1]} />
            <SpinningMesh position={[0, 1.5, 0]} color='lightgrey' speed={6} rotation={[THREE.Math.degToRad(0), 0, 0]} scale={[.1, 1, 1]} />
          </group>

          {show ? (
            <Notification />
          ) : ''}
          {Text}

        </group>

        {/* <SpinningMesh position={[0,3, 0]} color='red' speed={6}  rotation={[THREE.Math.degToRad(0 ), 0, 0]} scale={[10,.5, 10]} /> */}



        {/* ground floor  */}

        <group>

          <mesh position={[0, 0, 0]} rotation={[THREE.Math.degToRad(-90), 0, 0]} scale={[15, 15, 1]} receiveShadow>
            <planeGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="#A6A4A7" />
          </mesh>
        </group>
        {/* ground floor  */}

        <OrbitControls />
      </Canvas>

    </>
  );
}

export default withRouter(App);

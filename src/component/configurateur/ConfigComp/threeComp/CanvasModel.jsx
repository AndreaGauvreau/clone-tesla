import {Progress} from '@chakra-ui/react'
import {OrbitControls, Stage, useProgress} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {useEffect} from 'react'
import {Model} from './Model'

export default function CanvasModel({state, setProgress}) {
  const {progress, errors, active, item, loaded, total} = useProgress()
  useEffect(() => {
    setProgress(progress)
    console.log('progress', progress, total, loaded, item, active)
  }, [progress, total, loaded, item, active])
  return (
    <>
      <Canvas shadows camera={{position: [4, -1, 8], fov: 35}}>
        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{
            type: 'accumulative',
            color: 'black',
            colorBlend: 2,
            opacity: 1,
          }}
          adjustCamera={1}
          environment="city"
        >
          <Model state={state} />
        </Stage>
        <OrbitControls
          minPolarAngle={1.45}
          maxPolarAngle={1.45}
          makeDefault
          enableZoom={false}
        />
      </Canvas>{' '}
    </>
  )
}

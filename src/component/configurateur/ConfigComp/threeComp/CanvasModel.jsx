import {
  Html,
  OrbitControls,
  Stage,
  useProgress,
  useGLTF,
  PresentationControls,
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import React, {Suspense, useEffect, useState} from 'react'
import {Bloom, EffectComposer} from '@react-three/postprocessing'
import * as THREE from 'three'
import LoaderIcon from '../../../ui/LoaderIcon'
import {colorsCar, colorsInternCar} from '@/component/helpers/constantes'
import {Box, Flex} from '@chakra-ui/react'
//import {Model} from './Model'
//const Model = dynamic(() => import('./Model'))
export function Loader() {
  const {progress} = useProgress()
  useEffect(() => {
    console.log('progress', progress)
  }, [progress])
  return <Html center>{progress} % loaded</Html>
}

export default function CanvasModel({state, lightOn}) {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{fov: 20, position: [0, 0, 8]}}>
        <Suspense fallback={<Loader />}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 4, 0]}
            polar={[0, Math.PI / 8]}
            azimuth={[-Math.PI * 4, Math.PI * 4]}
          >
            <Stage
              intensity={0.5}
              preset="rembrandt"
              shadows={{
                type: 'accumulative',
                color: 'black',
                colorBlend: 2,
                opacity: lightOn ? 0.7 : 1,
              }}
              environment={lightOn ? 'night' : 'city'}
            >
              <Model state={state} lightOn={lightOn} />
              <EffectComposer>
                <Bloom
                  luminanceThreshold={1}
                  luminanceSmoothing={3}
                  height={700}
                  intensity={10}
                  bloomScale={20.5}
                  mipmapBlur={10}
                  opacity={0.2}
                />
              </EffectComposer>
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export function Model({state, lightOn}) {
  const isMetalness = colorsCar[state?.selectedColor].color === 'white'
  const {nodes, materials} = useGLTF('/model/teslamodelyblend2.glb')
  const carMaterial = new THREE.MeshPhysicalMaterial({
    color: colorsCar[state?.selectedColor].hex,
    metalness: isMetalness ? 0.2 : 0.7,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 0,
    reflectivity: 0.8,
    refractionRatio: 0.9,
    envMapIntensity: 0.5,
    side: THREE.FrontSide,
  })

  const carEmissiveWhite = new THREE.MeshPhysicalMaterial({
    emissive: 'white',
    emissiveIntensity: lightOn ? 10 : 0,
    toneMapped: false,
  })
  const carEmissiveRed = new THREE.MeshPhysicalMaterial({
    emissive: 'tomato',
    emissiveIntensity: lightOn ? 8 : 1,
    toneMapped: false,
  })

  const carWhiteColor = new THREE.MeshPhysicalMaterial({
    color: colorsInternCar[state?.selectedInterColor].color,
  })
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['05'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['02'].geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['04'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['03'].geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['10'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['11'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['09'].geometry}
        material={materials.calipers2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['08'].geometry}
        material={materials.calipers2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['17'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['15'].geometry}
        material={materials.calipers2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['23'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['14'].geometry}
        material={materials.calipers2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['24'].geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['19'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['18'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['37'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['22'].geometry}
        material={materials.metal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['25'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass1.geometry}
        material={materials.glass_body}
      >
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['39'].geometry}
        material={materials.glass_lights}
      >
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['38'].geometry}
        material={materials.chrome_rear_lights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['35'].geometry}
        material={materials.black2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['41'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['34'].geometry}
        material={materials.chrome_rear_lights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['40'].geometry}
        material={carEmissiveRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['42'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['44'].geometry}
        material={materials.fenders}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass2.geometry}
        material={materials.glass_body}
      >
        <meshPhysicalMaterial
          attach="material"
          color={0x000000}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={0}
          refractionRatio={0.1}
          envMapIntensity={0.9}
          side={THREE.FrontSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['48'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass3.geometry}
        material={materials.glass_body}
      >
        {' '}
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['50'].geometry}
        material={materials.chrome_dark}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['49'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['53'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['45'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['51'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['54'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['56'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['58'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['60'].geometry}
        material={materials.black2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['55'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightfront3.geometry}
        material={carEmissiveWhite}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass7.geometry}
        material={materials.glass_lights}
      >
        {' '}
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['43'].geometry}
        material={carWhiteColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['52'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['62'].geometry}
        material={materials.chrome_rear_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['61'].geometry}
        material={materials.chrome_rear_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['66'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['67'].geometry}
        material={materials.glass_lights}
      >
        {' '}
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['68'].geometry}
        material={materials.glass_front_lights}
      >
        {' '}
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['70'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['65'].geometry}
        material={materials.black2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['69'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightfront.geometry}
        material={carEmissiveWhite}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes['71'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['74'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['73'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['76'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['77'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['79'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['81'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightBack.geometry}
        material={carEmissiveRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['64'].geometry}
        material={materials.black2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['75'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['82'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carrosserie_3.geometry}
        material={carMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['84'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['78'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['85'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['88'].geometry}
        material={materials.alum}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['89'].geometry}
        material={materials.glass_lights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass4.geometry}
        material={materials.glass_lights}
      >
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['83'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['97'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['91'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['90'].geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lightfront2.geometry}
        material={carEmissiveWhite}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['92'].geometry}
        material={materials.interior}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass5.geometry}
        material={materials.glass_body}
      >
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass6.geometry}
        material={materials.glass_lights}
      >
        {' '}
        <meshPhysicalMaterial
          attach="material"
          color={0xffffff}
          metalness={0}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.95} // Augmentez cette valeur pour une meilleure transparence
          reflectivity={1}
          refractionRatio={0.98}
          envMapIntensity={2}
          side={THREE.FrontSide}
          depthWrite={false}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['95'].geometry}
        material={materials.glass_lights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['99'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['102'].geometry}
        material={materials.fenders}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['101'].geometry}
        material={materials.fenders}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['100'].geometry}
        material={materials.chrome}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['96'].geometry}
        material={materials.chrome_rear_lights}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['29'].geometry}
        material={materials.wheels}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carrosserie2.geometry}
        material={carMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['20'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['26'].geometry}
        material={materials.wheels}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['06'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['07'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['21'].geometry}
        material={materials.brakedsk}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['28'].geometry}
        material={materials.wheels}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['31'].geometry}
        material={materials.tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['27'].geometry}
        material={materials.wheels}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['30'].geometry}
        material={materials.tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carrosserie.geometry}
        material={carMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['12'].geometry}
        material={materials.calipers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['01'].geometry}
        material={materials.calipers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['13'].geometry}
        material={materials.calipers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['33'].geometry}
        material={materials.tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['32'].geometry}
        material={materials.tires}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['00'].geometry}
        material={materials.calipers}
      />
    </group>
  )
}
// <meshPhongMaterial color={colorsCar[state?.selectedColor].color} />

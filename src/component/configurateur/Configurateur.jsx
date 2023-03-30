import {WarningIcon} from '@chakra-ui/icons'
import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import {colors} from '../ui/color'
import PerformanceDetail from './ConfigComp/PerformanceDetail'
import SelectColors from './ConfigComp/SelectColors'
import SelectedWheels from './ConfigComp/SelectedWheels'
import SliderConfig from './ConfigComp/SliderConfig'

export default function Configurateur({
  car,
  setSelectedCar,
  model3,
  selectedCar,
  colorsCar,
  selectedColor,
  state,
  setSelectedColor,
  wheelscar,
  listImage,
  setSliderIndex,
}) {
  const SelectCar = ({carNb}) => {
    return (
      <Flex
        w={'full'}
        border={'1px solid #00000050'}
        boxShadow={
          carNb === state.selectedCar
            ? `0 0 0 3px ${colors.blue}`
            : `0 0 0 0px ${colors.blue}`
        }
        transition={'0.5s'}
        onClick={() => setSelectedCar(carNb)}
        justifyContent="space-between"
        alignItems={'center'}
        p={2}
        borderRadius={3}
        h={'50px'}
        cursor="pointer"
      >
        <Text variant={'menuLink'}> {model3[carNb]?.model}</Text>
        <Text variant={'menuLink'}> {model3[carNb]?.price}</Text>
      </Flex>
    )
  }
  return (
    <Flex
      flexDirection={{base: 'column', lg: 'row'}}
      w={'100vw'}
      maxH={{base: 'none', lg: '100vh'}}
      minH={'100vh'}
      overflowY={{base: 'scroll', lg: 'none'}}
    >
      <Flex
        w={{base: '100%', lg: 'full'}}
        h={'100vh'}
        objectFit="cover"
        position={'relative'}
      >
        <SliderConfig
          listImage={listImage}
          setSliderIndex={setSliderIndex}
          state={state}
        />
      </Flex>
      <Flex
        w={{base: '100%', lg: '600px'}}
        h={'100vh'}
        overflowY={{base: 'auto', lg: 'scroll'}}
        p={5}
        px={10}
        flexDirection={'column'}
        alignItems="center"
        gap={'60px'}
      >
        <Flex boxShadow={'lg'} h={'auto'} p={3}>
          <WarningIcon pt={2} boxSize={7} color={'#3E6AE1'} />
          <Text fontSize={'sm'}>
            Prenez livraison d'ici le 31 mars 2023 et bénéficiez de 5 000 km de
            Supercharge gratuite. Parcourez nos véhicules disponibles.
          </Text>
        </Flex>
        <Flex flexDirection={'column'} alignItems="center">
          <Heading variant={'headModel'}>Model 3</Heading>
          <Text variant={'lightSubtile'}>
            Livraison prévue : Avr – Juin 2023
          </Text>
        </Flex>
        <Flex flexDirection={'row'} alignItems="flex-start" gap={7}>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text variant={'mediumFont'}>{car?.autonomie}</Text>
              <Text variant={'smallFont'}>Km</Text>
            </Flex>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent="center"
              h={'50px'}
            >
              <Text variant={'tinyFont'}>autonomie</Text>
              <Text variant={'tinyFont'}>(WLTP)</Text>
            </Flex>
          </Flex>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text variant={'mediumFont'}>{car?.vitesse}</Text>
              <Text variant={'smallFont'}>Km/h</Text>
            </Flex>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent="center"
              h={'50px'}
            >
              <Text variant={'tinyFont'}>vitesse</Text>
              <Text variant={'tinyFont'}>maximale</Text>
            </Flex>
          </Flex>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text variant={'mediumFont'}>{car?.zerocent}</Text>
              <Text variant={'smallFont'}>s</Text>
            </Flex>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent="center"
              h={'50px'}
            >
              <Text variant={'tinyFont'} textAlign="cetner">
                0 à 100 km/h
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} w={'100%'} gap={4}>
          <Text variant={'menuLink'}>Propulsion</Text>
          <SelectCar carNb={0} />
          <Text variant={'menuLink'}>Transmission intégrale Dual Motor</Text>
          <SelectCar carNb={1} />
          <SelectCar carNb={2} />
          <Flex flexDirection={'column'} alignItems="center">
            <Text textAlign={'center'} variant={'nolinkText'}>
              Les véhicules Tesla
            </Text>
            <Text textAlign={'center'} variant={'linkText'} mt={-1}>
              appartiennent à la classe énergétique A{' '}
            </Text>
            <Text textAlign={'center'} variant={'nolinkText'}>
              en matière d'émissions de CO2
            </Text>
            <Button mt={5} variant={'btnSmall'}>
              Caractéristiques
            </Button>
          </Flex>
        </Flex>
        {state?.selectedCar === 2 ? <PerformanceDetail /> : ''}{' '}
        <Flex flexDirection={'column'} alignItems="center" gap={5} my={'20vh'}>
          <Heading variant={'headModelsub'}>Couleur</Heading>
          <SelectColors
            colorsCar={colorsCar}
            selectedCar={selectedCar}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            state={state}
          />
        </Flex>
        <Flex flexDirection={'column'} alignItems="center" gap={5} mb={'10vh'}>
          <Heading variant={'headModelsub'}>Jantes</Heading>
          <SelectedWheels
            wheelscar={wheelscar}
            selectedCar={selectedCar}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
            state={state}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

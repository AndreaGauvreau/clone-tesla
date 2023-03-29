import {WarningIcon} from '@chakra-ui/icons'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'

export default function Configurateur({
  car,
  setSelectedCar,
  model3,
  selectedCar,
}) {
  const SelectCar = ({carNb}) => {
    return (
      <Flex
        w={'full'}
        border={
          carNb === selectedCar ? '1px solid blue' : '1px solid #00000070'
        }
        boxShadow={
          carNb === selectedCar ? '0 0 0 2px  blue' : '0 0 0 0  #00000070'
        }
        onClick={() => setSelectedCar(carNb)}
        justifyContent="space-between"
        alignItems={'space-between'}
        p={2}
        borderRadius={3}
        transition={'0.3s'}
      >
        <Text> {model3[carNb].model}</Text>
        <Text> {model3[carNb].price}</Text>
      </Flex>
    )
  }
  const colorsCar = ['red', 'blue', 'grey', 'black', 'white']
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
        bg={'url(/images/model-3.webp)  no-repeat center center / cover'}
      ></Flex>
      <Flex
        w={{base: '100%', lg: '550px'}}
        h={'100vh'}
        overflowY={{base: 'auto', lg: 'scroll'}}
        p={5}
        flexDirection={'column'}
        alignItems="center"
        gap={10}
      >
        <Flex boxShadow={'lg'} h={'auto'} p={3}>
          <WarningIcon pt={2} boxSize={7} color={'#3E6AE1'} />
          <Text fontSize={'sm'}>
            Prenez livraison d'ici le 31 mars 2023 et bénéficiez de 5 000 km de
            Supercharge gratuite. Parcourez nos véhicules disponibles.
          </Text>
        </Flex>
        <Flex flexDirection={'column'} alignItems="center">
          <Heading>Model 3</Heading>
          <Text> Livraison prévue : Avr – Juin 2023</Text>
        </Flex>
        <Flex flexDirection={'row'} alignItems="flex-start" gap={8}>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text fontSize={'25px'} lineHeight={'28px'} fontWeight={'700'}>
                {car?.autonomie}
              </Text>
              <Text fontSize={'13px'} lineHeight={'13px'} fontWeight={'700'}>
                Km
              </Text>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center '}>
              <Text fontSize={'sm'}>autonomie</Text>
              <Text fontSize={'sm'}>(WLTP)</Text>
            </Flex>
          </Flex>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text fontSize={'25px'} lineHeight={'25px'} fontWeight={'700'}>
                {car?.vitesse}
              </Text>
              <Text fontSize={'13px'} lineHeight={'13px'} fontWeight={'700'}>
                Km/h
              </Text>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center '}>
              <Text fontSize={'sm'}>vitesse</Text>
              <Text fontSize={'sm'}>maximale</Text>
            </Flex>
          </Flex>
          <Flex flexDirection={'column'}>
            <Flex
              flexDirection={'row'}
              alignItems={'flex-end'}
              justifyContent="center"
            >
              <Text fontSize={'25px'} lineHeight={'25px'} fontWeight={'700'}>
                {car?.zerocent}
              </Text>
              <Text fontSize={'13px'} lineHeight={'13px'} fontWeight={'700'}>
                s
              </Text>
            </Flex>
            <Flex flexDirection={'column'} alignItems={'center '}>
              <Text fontSize={'sm'}>0 à 100 km/h</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} w={'100%'} gap={2}>
          <Text>Propulsion</Text>
          <SelectCar carNb={0} />
          <Text>Transmission intégrale Dual Motor</Text>
          <SelectCar carNb={1} />
          <SelectCar carNb={2} />
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Couleur</Heading>
          <Flex flexDirection={'row'} gap={2}>
            {colorsCar?.map(e => (
              <Box w={30} h={30} borderRadius={'50%'} bg={e}></Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

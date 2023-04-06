import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'
import {colors} from '../ui/color'
import Information from './information'
export default function PointInterets({
  image = '/images/modelsPage/base-normal.jpeg',
  image2 = '/images/modelsPage/base-plaid.jpeg',
}) {
  const [imgSelected, setImgSelected] = useState()
  return (
    <Flex
      w={'100%'}
      h={'140vh'}
      bg={'#f2f2f2'}
      justifyContent={'space-around'}
      alignItems={'center'}
      p={10}
    >
      <Flex
        flexDirection={'column'}
        justifyContent={'space-around'}
        alignItems={'center'}
        w={{base: '100%', lg: '100%'}}
        gap={5}
      >
        <Flex maxW={'1000px'} w={'100%'}>
          <Flex
            w={{base: '100%', lg: '700px'}}
            flexDirection="column"
            justifyContent={'flex-start'}
            gap={5}
          >
            <Heading variant={'headModelsub'}>
              Groupe motopropulseur électrique
            </Heading>
            <Text variant={'basicmedium'}>
              Les plateformes de la Model S unissent les technologies du groupe
              motopropulseur et de la batterie pour des performances, une
              autonomie et une efficacité incomparables. Nouvelle architecture
              thermique des modules et du pack batterie assurent une recharge
              plus rapide et vous offrent plus de puissance et d'endurance
              quelles que soient les conditions.
            </Text>
          </Flex>
        </Flex>
        <Box
          position={'relative'}
          h={{base: '25vh', md: '70vh'}}
          w={'100%'}
          maxW={{base: '100%', lg: '800px', xl: '1200px'}}
          borderRadius={'20px'}
          overflow={'hidden'}
        >
          <Image
            src={imgSelected ? image : image2}
            fill
            objectFit="cover"
            alt={'moteur tesla carrosserie'}
          />
        </Box>
        <Flex
          flexDirection={{base: 'column', md: 'row'}}
          w={{base: '100%', lg: '800px', xl: '1200px'}}
          gap={5}
        >
          <Flex
            w={{base: '100%', md: '50%'}}
            onClick={() => setImgSelected(false)}
            opacity={!imgSelected ? 1 : 0.5}
            transition={'0.3s'}
            flexDirection={'column'}
            cursor={'pointer'}
            gap={5}
          >
            <Box
              w={'90%'}
              h={!imgSelected ? '4px' : '2px'}
              bg={'black'}
              transition={'0.3s'}
              my={4}
            />
            <Heading fontSize={'20px'}>Model S</Heading>
            <Text variant={'basicmedium'}>
              La transmission intégrale Dual Motor offre une autonomie encore
              plus étendue que celle des autres véhicules de notre gamme
              actuelle, accompagnée d'une puissance inouïe et d'une tenue de
              route optimale.
            </Text>
            <Flex flexDirection={'row'} gap={10}>
              <Information
                color={'black'}
                i1={'3.2'}
                i2={'s'}
                i3={'0 à 100km/h'}
                delay={0}
              />
              <Information
                i1={'634'}
                color={'black'}
                i2={'km'}
                i3={'Autonomie (WLTP)'}
                delay={0.2}
              />
            </Flex>
          </Flex>
          <Flex
            gap={5}
            w={{base: '100%', md: '50%'}}
            onClick={() => setImgSelected(true)}
            opacity={imgSelected ? 1 : 0.5}
            transition={'0.3s'}
            flexDirection={'column'}
            cursor={'pointer'}
          >
            <Box
              w={'90%'}
              h={imgSelected ? '4px' : '2px'}
              bg={'black'}
              transition={'0.3s'}
              my={4}
            />
            <Heading fontSize={'20px'}>Model S Plaid</Heading>
            <Text variant={'basicmedium'}>
              Maintient une puissance de plus de 1 000 chevaux jusqu'à 322 km/h
              grâce à la transmission intégrale Tri-Motor, dotée de la fonction
              de contrôle vectoriel du couple et de trois rotors indépendants à
              piste carbone.
            </Text>
            <Flex flexDirection={'row'} gap={10}>
              <Information
                color={'black'}
                i1={'2.1'}
                i2={'s*'}
                i3={'0 à 100km/h'}
                delay={0}
              />
              <Information
                i1={'600'}
                color={'black'}
                i2={'km'}
                i3={'Autonomie (WLTP)'}
                delay={0.2}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

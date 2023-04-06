import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {FadeInTop} from './FaedinTop'
import CtaBtn from './ctaBtn'
export default function Carrosserie() {
  return (
    <Flex w={'100%'} h={'100vh'} justifyContent="center" alignItems={'center'}>
      <Flex
        position="relative"
        flexDirection={{base: 'column-reverse', lg: 'row'}}
        h={{base: '100vh', lg: '50vh'}}
        maxW={'1000px'}
        w={{base: '100%', lg: '100%'}}
        p={5}
      >
        <Flex w={{base: '90%', lg: '35%'}} flexDirection={'column'} gap={5}>
          <Heading variant={'smallbasicmedium'}>Sécurité</Heading>
          <Heading variant={'headModelsub'}>
            Excellente protection contre les chocs
          </Heading>
          <Text variant={'basicmedium'}>
            La sécurité est l'aspect le plus important de chaque Tesla. Nous
            concevons nos véhicules de manière à dépasser les normes de
            sécurité.
          </Text>
          <Text variant={'linkText'}>
            Note de 5 étoiles et sécurité inégalée dans sa catégorie
          </Text>
          <Text variant={'basicmedium'}>
            La Model S a obtenu 5 étoiles au test de sécurité Euro NCAP en 2022
            et a remporté les prix Best in Class dans les catégories Prestige et
            Pure Electric.
          </Text>
          <CtaBtn dark={true} texte={'commander'} lien={'/configurateur'} />
        </Flex>
        <Flex
          w={{base: '100%', lg: '70%'}}
          position="relative"
          h={{base: '35%', lg: '550px'}}
        >
          <Image
            src={'/images/modelsPage/skelette.jpeg'}
            fill
            objectFit="cover"
            alt={'image carrosserie tesla'}
          />
          <PointGrowth
            width={'550px'}
            position={'100px'}
            height={'130px'}
            fromBottom={false}
            positionMobile={'15%'}
            widthMobile={'80%'}
          />
          <PointGrowth
            width={'350px'}
            position={'400px'}
            height={'80px'}
            positionMobile={'65%'}
            widthMobile={'50%'}
          />
          <PointGrowth
            width={'380px'}
            position={'80px'}
            positionMobile={'10%'}
            widthMobile={'65%'}
            height={'70px'}
            fromBottom={false}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

const PointGrowth = ({
  width,
  position,
  height,
  fromBottom = true,
  positionMobile = position,
  widthMobile = width,
}) => {
  const squareVariants = {
    visible: {height: height},
    hidden: {height: '0px'},
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])
  return (
    <Box
      w={{base: widthMobile, lg: width}}
      zIndex={2}
      top={{base: positionMobile, lg: position}}
      position={'absolute'}
      right={0}
    >
      <motion.div
        ref={ref}
        animate={controls}
        variants={squareVariants}
        initial="hidden"
        exit="hidden"
        style={{transformOrigin: 'bottom'}}
        transition={{duration: 0.4}}
        width={'100%'}
        background={'#000000'}
      >
        <Box
          w={'full'}
          borderLeft={'3px solid black'}
          h={'full'}
          position={'relative'}
        >
          <FadeInTop fromBottom={fromBottom}>
            {fromBottom ? (
              <Text
                fontSize={'10px'}
                position={'absolute'}
                bottom={'0px'}
                left={'20px'}
              >
                Risque de retournement très faible
              </Text>
            ) : (
              <Text
                fontSize={'10px'}
                position={'absolute'}
                top={'0px'}
                left={'20px'}
              >
                Risque de retournement très faible
              </Text>
            )}
          </FadeInTop>
        </Box>
      </motion.div>
    </Box>
  )
}

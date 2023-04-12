'use client'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'
import Information from './information'
import CtaBtn from './ctaBtn'
import {FadeInTop} from './FaedinTop'

export default function HeaderSection({
  image = '/images/model-s.webp',
  placeholder = '/images/model-y-blur.jpg',
  model = 'Model S',
  subtitle,
  content = {},
}) {
  const {i1: i1a, i2: i2a, i3: i3a, i4: i4a} = content.branch1 || {}
  const {i1: i1b, i2: i2b, i3: i3b, i4: i4b} = content.branch2 || {}
  const {i1: i1c, i2: i2c, i3: i3c, i4: i4c} = content.branch3 || {}
  const {i1: i1d, i2: i2d, i3: i3d, i4: i4d} = content.branch4 || {}
  const {text: ctaText, link: ctaLink} = content.cta || {}
  const [loaded, setLoaded] = useState(false)

  return (
    <Box w={'100%'} h={{base: '90svh', md: '95vh'}} position="relative">
      <Image
        src={placeholder} // Remplacez par l'URL de votre image légère
        fill
        objectFit="cover"
        quality={100}
        priority
        alt={`image légère de la Tesla ${model}`}
        style={{opacity: loaded ? 0 : 1, transition: 'opacity 0.5s'}}
      />
      <Image
        src={image}
        fill
        objectFit="cover"
        quality={100}
        priority
        alt={`image de la tesla ${model}`}
        onLoad={() => setLoaded(true)}
        style={{opacity: loaded ? 1 : 0, transition: 'opacity 0.5s'}}
      />
      <Flex
        position={'absolute'}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems="center"
        h={'100%'}
        w={'100%'}
        className="heroGradient"
      >
        <FadeInTop>
          <Flex flexDirection="column" alignItems="center" gap={0}>
            <Heading
              variant={'headModel'}
              textAlign="center"
              mt={'20vh'}
              as={'h1'}
            >
              {model}
            </Heading>
            <Text>{subtitle ?? ''}</Text>
          </Flex>
        </FadeInTop>
        <Flex
          flexDirection="column"
          alignItems={'center'}
          gap={5}
          w={'100%'}
          boxSizing="border-box"
        >
          <Flex
            flexDirection={'row'}
            flexWrap={'wrap'}
            gap={5}
            p={{base: 5, md: 10}}
            w={'100%'}
            justifyContent="space-around"
            boxSizing="border-box"
            zIndex={2}
            maxW={'1000px'}
          >
            <Information i1={i1a} i2={i2a} i3={i3a} i4={i4a} delay={0} />
            <Information i1={i1b} i2={i2b} i3={i3b} i4={i4b} delay={0.1} />
            <Information i1={i1c} i2={i2c} i3={i3c} i4={i4c} delay={0.2} />
            <Information
              i1={i1d}
              i2={i2d}
              i3={i3d}
              i4={i4d}
              delay={0.3}
              mobile={false}
            />
            <CtaBtn texte={ctaText} lien={ctaLink} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

'use client'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Information from './information'
import CtaBtn from './ctaBtn'
import {FadeInTop} from './FaedinTop'

export default function HeaderSection({
  image = '/images/model-s.webp',
  model = 'Model S',
  subtitle,
  content = {},
}) {
  const {i1: i1a, i2: i2a, i3: i3a, i4: i4a} = content.branch1 || {}
  const {i1: i1b, i2: i2b, i3: i3b, i4: i4b} = content.branch2 || {}
  const {i1: i1c, i2: i2c, i3: i3c, i4: i4c} = content.branch3 || {}
  const {i1: i1d, i2: i2d, i3: i3d, i4: i4d} = content.branch4 || {}
  const {text: ctaText, link: ctaLink} = content.cta || {}

  return (
    <Box w={'100vw'} h={{base: '90svh', md: '95vh'}} position="relative">
      <Image src={image} fill objectFit="cover" quality={100} priority />
      <Flex
        position={'absolute'}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems="center"
        h={'100%'}
        w={'100vw'}
        className="heroGradient"
      >
        <FadeInTop>
          <Flex flexDirection="column" alignItems="center" gap={0}>
            <Heading variant={'headModel'} textAlign="center" mt={'20vh'}>
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
          >
            <Information i1={i1a} i2={i2a} i3={i3a} i4={i4a} delay={0} />
            <Information i1={i1b} i2={i2b} i3={i3b} i4={i4b} delay={0.1} />
            <Information i1={i1c} i2={i2c} i3={i3c} i4={i4c} delay={0.2} />
            <Information i1={i1d} i2={i2d} i3={i3d} i4={i4d} delay={0.3} />
            <CtaBtn texte={ctaText} lien={ctaLink} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

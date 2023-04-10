import {Box, Flex, Heading} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {FadeInTop} from './FaedinTop'

export default function HeroImage({
  image = '/images/model-s.webp',
  model = "L'intérieur du futur",
}) {
  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems="center"
        h={'150px'}
        w={'100%'}
        bg={'black'}
      >
        <FadeInTop>
          <Heading variant={'headModelsub'} color="white" textAlign="center">
            {model}
          </Heading>
        </FadeInTop>
      </Flex>
      <Flex position={'relative'} h={{base: '100svh', md: '110vh'}}>
        <Box
          w={'100%'}
          h={{base: '100svh', md: '110vh'}}
          position="relative"
          className="heroGradient2"
        >
          <Image
            src={image}
            fill
            objectFit="cover"
            quality={100}
            alt={'découvrez l interieur du futur'}
          />
        </Box>
      </Flex>
    </>
  )
}

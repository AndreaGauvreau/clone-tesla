import {Box, Flex, Heading} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function HeroImage({
  image = '/images/model-s.webp',
  model = "L'intérieur du futur",
}) {
  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems="center"
        h={'200px'}
        w={'100%'}
        bg={'black'}
      >
        <Heading variant={'headModel'} color="white" textAlign="center">
          {model}
        </Heading>
      </Flex>
      <Flex position={'relative'} h={{base: '90svh', md: '90vh'}}>
        <Box
          w={'100%'}
          h={{base: '90svh', md: '90vh'}}
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

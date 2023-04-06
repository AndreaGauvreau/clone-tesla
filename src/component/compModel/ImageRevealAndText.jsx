import {Box, Flex, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import {FadeInTop} from './FaedinTop'
export default function ImageRevealAndText({
  title = 'titre',
  paragraph = 'paragraph',
  image = '/images/model-s.webp',
  inverse = false,
}) {
  return (
    <Flex align="center" justify="center" minW={'100%'} h={'100%'} bg={'black'}>
      <Flex
        w={{base: '100%', md: '800px'}}
        h={{base: '100%', md: '240px'}}
        align="center"
        justify="center"
        direction={{
          base: 'column-reverse',
          md: inverse ? 'row-reverse' : 'row',
        }}
        gap={5}
        color={'white'}
      >
        <Box w={{base: '100%', md: '420px'}} px={10} py={{base: 10, md: 0}}>
          <FadeInTop>
            <Heading as="h2" variant={'basicmedium'} mb={5}>
              {title}
            </Heading>
            <Text variant={'basicmedium'}>{paragraph}</Text>
          </FadeInTop>
        </Box>
        <Box w={{base: '100%', md: '380px'}}>
          <FadeInTop>
            <Box
              w={{base: '100%', md: '400px'}}
              h={'240px'}
              position={'relative'}
            >
              <Image src={image} objectFit="cover" fill />
            </Box>
          </FadeInTop>
        </Box>
      </Flex>
    </Flex>
  )
}

import {Flex, Text} from '@chakra-ui/react'
import {NodeNextRequest} from 'next/dist/server/base-http/node'
import React from 'react'
import {FadeInTop} from './FaedinTop'

export default function Information({
  color = 'white',
  i1 = 'infos1',
  i2 = 'infos2',
  i3 = 'infos3',
  i4,
  mobile = true,
  delay,
}) {
  return (
    <Flex
      flexDirection={'column'}
      color={color}
      display={{base: mobile ? 'flex' : 'none', md: 'flex'}}
    >
      <FadeInTop delay={delay}>
        <Flex
          flexDirection={'row'}
          alignItems={'flex-end'}
          justifyContent="center"
        >
          <Text variant={'mediumFont'}>{i1}</Text>
          <Text variant={'smallFont'}>{i2}</Text>
        </Flex>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent="center"
          h={'50px'}
        >
          <Text variant={'tinyFont'}>{i3}</Text>
          <Text variant={'tinyFont'}>{i4 ?? ''}</Text>
        </Flex>
      </FadeInTop>
    </Flex>
  )
}

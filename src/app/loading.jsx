'use client'
import {Box, Flex} from '@chakra-ui/react'
import React from 'react'

export default function loading() {
  return (
    <Flex w={'100vw'} h={'100vh'} justifyContent="center" alignItems={'center'}>
      <span>loading...</span>
    </Flex>
  )
}

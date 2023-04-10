import {Box, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './Mainmenu.css'
export default function MenuConfig() {
  return (
    <>
      <Flex
        position={'fixed'}
        w={'100vw'}
        zIndex={99}
        backgroundColor={'#ffffff90'}
        backdropFilter={'blur(10px)'}
        flexDirection="row"
        px={{base: 5, xl: 20}}
        justifyContent={'space-between'}
        py={5}
      >
        <Flex justifyContent={'flex-start'} w={'25%'}>
          <Box>
            <Link href={'/'}>
              <Image src="/images/logo-b.png" width={120} height={50} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

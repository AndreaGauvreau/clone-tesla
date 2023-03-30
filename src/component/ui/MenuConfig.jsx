import {CloseIcon} from '@chakra-ui/icons'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef} from 'react'
import './Mainmenu.css'
export default function MenuConfig() {
  return (
    <>
      <Flex
        position={'fixed'}
        w={'100vw'}
        zIndex={99}
        backdropFilter={'blur(10px)'}
        bg={'#fffffff90'}
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

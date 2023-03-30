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

export default function MainMenu() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const overlayRef = useRef(null)
  const elementsRef = useRef([])

  useEffect(() => {
    const elements = elementsRef.current
    const overlay = overlayRef.current

    const handleMouseEnter = e => {
      const rect = e.target.getBoundingClientRect()
      overlay.style.opacity = '1'
      overlay.style.width = `${rect.width + 30}px`
      overlay.style.height = `${rect.height + 20}px`
      overlay.style.top = `${rect.top - 10}px`
      overlay.style.left = `${rect.left - 15}px`
      clearTimeout(timeout)
    }

    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        overlay.style.opacity = '0'
      }, 300)
    }

    elements.forEach(element => {
      element?.addEventListener('mouseenter', handleMouseEnter)
      element?.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      elements.forEach(element => {
        element?.removeEventListener('mouseenter', handleMouseEnter)
        element?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  let timeout
  return (
    <>
      <Box
        bg={'#00000010'}
        className="overlay"
        ref={overlayRef}
        position="fixed"
        zIndex={80}
      />
      <Flex
        position={'fixed'}
        w={'100vw'}
        zIndex={99}
        flexDirection="row"
        px={{base: 5, xl: 20}}
        justifyContent={'space-between'}
        py={5}
      >
        <Flex justifyContent={'flex-start'} w={'25%'}>
          <Box>
            <Image src="/images/logo-b.png" width={120} height={50} />
          </Box>
        </Flex>
        <Flex
          gap={8}
          justifyContent={'center'}
          w={'50%'}
          display={{base: 'none', xl: 'flex'}}
        >
          <Link href={'/configurateur'}>
            <Text
              variant={'menuLink'}
              className="hoveredLink"
              ref={el => elementsRef.current.push(el)}
            >
              Model S
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Model 3
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Model X
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Model Y
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Powerwall
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Recharge
            </Text>
          </Link>
        </Flex>
        <Flex
          gap={8}
          justifyContent={'flex-end'}
          w={'25%'}
          display={{base: 'none', xl: 'flex'}}
        >
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Assistance
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Shop
            </Text>
          </Link>
          <Link href={'/configurateur'}>
            <Text
              className="hoveredLink"
              variant={'menuLink'}
              ref={el => elementsRef.current.push(el)}
            >
              Compte
            </Text>
          </Link>
          <Text variant={'menuLink'} onClick={onOpen} cursor="pointer">
            Menu
          </Text>
        </Flex>
        <Text
          onClick={onOpen}
          cursor="pointer"
          display={{base: 'inline', xl: 'none'}}
          borderRadius={5}
          bg={'#00000010'}
          backdropFilter={'blur(6px)'}
          px={4}
          py={1}
          variant={'menuLink'}
        >
          Menu
        </Text>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} w={'300px'}>
          <DrawerOverlay backdropFilter={'blur(5px)'} bg={'transparent'}>
            <DrawerContent>
              <Flex
                h={'100px'}
                alignItems="center"
                justifyContent={'flex-end'}
                pr={5}
              >
                <CloseIcon />
              </Flex>
              <DrawerBody>
                <VStack spacing={5} align="start" px={5}>
                  {[
                    'Véhicules disponibles',
                    "Véhicules D'occasion",
                    'Reprise',
                    'Essais',
                    'Véhicules de société',
                    'Cybertruck',
                    'Roadster',
                    'Électricité',
                    'Électricité pour les professionnels',
                    'Industries',
                    'Énergie',
                    'Nous trouver',
                    'Événements',
                    'Assistance',
                    'Relations investisseurs',
                  ].map(item => (
                    <Link key={item} href="/#">
                      <Text
                        className="hoveredLink"
                        variant={'menuLink'}
                        ref={el => elementsRef.current.push(el)}
                      >
                        {item}
                      </Text>
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </>
  )
}

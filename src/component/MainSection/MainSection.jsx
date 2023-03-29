'use client'
import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'
import React, {useRef, useState} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import {colors} from '../ui/color'
import Image from 'next/image'

export default function MainSection({pageInfos, index}) {
  const [opacity, setOpacity] = useState(0)
  const boxref = useRef()
  const {scrollYProgress} = useScroll({
    target: boxref,
    offset: ['-50vh', '50vh'],
  })
  useMotionValueEvent(scrollYProgress, 'change', e => {
    console.log(pageInfos?.title, e)
    if (e < 0.7) {
      setOpacity(0 + e * 3)
    } else {
      setOpacity(1 - e)
    }
  })
  return (
    <>
      <Flex
        zIndex={10}
        position={'fixed'}
        top={'20vh'}
        opacity={opacity}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems="center"
        h={'70vh'}
      >
        <Flex flexDirection="column" opacity={opacity} alignItems="center">
          <Heading fontSize={'5xl'} textAlign="center">
            {pageInfos?.title}
          </Heading>
          {pageInfos?.subtitleLink ? (
            <Link href={pageInfos?.subtitleLink}>
              <Text>{pageInfos?.subtitle}</Text>
            </Link>
          ) : pageInfos?.subtitle ? (
            <Text>{pageInfos?.subtitle}</Text>
          ) : (
            ''
          )}
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={'center'}
          gap={5}
          w={'100%'}
          boxSizing="border-box"
        >
          <Flex
            flexDirection={{base: 'column', md: 'row'}}
            gap={5}
            p={5}
            w={'100%'}
            justifyContent="center"
            boxSizing="border-box"
          >
            <Link href={pageInfos?.bntLlink}>
              <Button
                bg={colors.btn1}
                color={'white'}
                borderRadius={5}
                fontSize={'sm'}
                w={{base: 'full', md: '350px'}}
              >
                {pageInfos?.btnL}
              </Button>
            </Link>
            {pageInfos?.btnRlink ? (
              <Link href={pageInfos?.btnRlink}>
                <Button
                  borderRadius={5}
                  fontSize={'sm'}
                  w={{base: '100%', md: '350px'}}
                >
                  {pageInfos?.btnR}
                </Button>
              </Link>
            ) : (
              ''
            )}{' '}
          </Flex>
          {pageInfos?.lastSubtitleLink ? (
            <Link href={pageInfos?.lastSubtitleLink}>
              <Text>{pageInfos?.lastSubtitle}</Text>
            </Link>
          ) : (
            ''
          )}
        </Flex>
      </Flex>
      <Flex
        w={'100%'}
        minH={'100vh'}
        justifyContent="space-between"
        alignItems={'center'}
        flexDirection="column"
        ref={boxref}
        className="sectionscroll"
      >
        <Box w={'100%'} h={'100%'} position={'relative'} pt={'15%'} pb={'20px'}>
          {index === 0 ? (
            <Image
              src={pageInfos?.image}
              alt={pageInfos?.lastSubtitle}
              fill
              priority
              objectFit="cover"
            />
          ) : (
            <Image
              src={pageInfos?.image}
              alt={pageInfos?.lastSubtitle}
              fill
              objectFit="cover"
            />
          )}
        </Box>
      </Flex>
    </>
  )
}

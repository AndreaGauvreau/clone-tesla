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
        top={'15vh'}
        opacity={opacity}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems="center"
        h={'80vh'}
      >
        <Flex
          flexDirection="column"
          opacity={opacity}
          alignItems="center"
          gap={0}
        >
          <Heading variant={'headModel'} textAlign="center">
            {pageInfos?.title}
          </Heading>
          {pageInfos?.subtitleLink ? (
            <Link href={pageInfos?.subtitleLink}>
              <Text variant={'linkText'}>{pageInfos?.subtitle}</Text>
            </Link>
          ) : pageInfos?.subtitle ? (
            <Text variant={'linkNoText'}>{pageInfos?.subtitle}</Text>
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
              <Button variant={'BtnLlink'}>{pageInfos?.btnL}</Button>
            </Link>
            {pageInfos?.btnRlink ? (
              <Link href={pageInfos?.btnRlink}>
                <Button variant={'BtnRlink'}>{pageInfos?.btnR}</Button>
              </Link>
            ) : (
              ''
            )}{' '}
          </Flex>
          {pageInfos?.lastSubtitleLink ? (
            <Link href={pageInfos?.lastSubtitleLink}>
              <Text variant={'linkText'}>{pageInfos?.lastSubtitle}</Text>
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

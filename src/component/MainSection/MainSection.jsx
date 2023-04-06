import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'
import React, {useRef, useState} from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
import Image from 'next/image'
import {useEffect} from 'react'
import {FadeInTop} from '../compModel/FaedinTop'
export default function MainSection({pageInfos, index}) {
  const [opacity, setOpacity] = useState(0)
  const [indexs, setIndexs] = useState(0)
  const [increase, setIncrease] = useState(true)

  const boxref = useRef()
  const {scrollYProgress} = useScroll({
    target: boxref,
    offset: ['-50vh', '50vh'],
  })
  useMotionValueEvent(scrollYProgress, 'change', e => {
    if (e === undefined || e === null) {
      setIncrease(e)
      setIndexs(0)
    } else if (e > 0.95) {
      setIncrease(e)
      setIndexs(0)
    } else if (e > 0.7) {
      setOpacity(1 - e)
      setIncrease(e)
      setIndexs(0)
    } else if (e < 0.25) {
      setIndexs(0)
      setIncrease(e)
    } else if (e < 0.7) {
      setOpacity(0 + e * 3)
      setIndexs(20)
      setIncrease(e)
    }
  })
  useEffect(() => {
    console.log(pageInfos?.title, indexs, increase)
  }, [indexs])
  return (
    <>
      <Flex
        position={'fixed'}
        top={'15vh'}
        opacity={opacity}
        flexDirection="column"
        justifyContent={'space-between'}
        alignItems="center"
        h={{base: '80svh', md: '80vh'}}
        zIndex={indexs}
        w={'100vw'}
      >
        <Flex
          flexDirection="column"
          opacity={opacity}
          alignItems="center"
          gap={0}
          zIndex={indexs}
        >
          <FadeInTop>
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
          </FadeInTop>
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
            <FadeInTop>
              <Link href={pageInfos?.bntLlink}>
                <Button variant={'BtnLlink'}>{pageInfos?.btnL}</Button>
              </Link>
            </FadeInTop>{' '}
            {pageInfos?.btnRlink ? (
              <FadeInTop>
                <Link href={pageInfos?.btnRlink}>
                  <Button variant={'BtnRlink'}>{pageInfos?.btnR}</Button>
                </Link>
              </FadeInTop>
            ) : (
              ''
            )}
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
        minH={{base: '100svh', md: '100vh'}}
        justifyContent="space-between"
        alignItems={'center'}
        flexDirection="column"
        ref={boxref}
        className="sectionscroll"
      >
        <Box
          w={'100%'}
          h={'100%'}
          position={'relative'}
          pt={'15%'}
          pb={'20px'}
          zIndex={10}
        >
          {index === 0 ? (
            <Image
              src={pageInfos?.image}
              alt={pageInfos?.lastSubtitle}
              fill
              priority
              objectFit="cover"
              quality={100}
            />
          ) : (
            <Image
              src={pageInfos?.image}
              alt={pageInfos?.lastSubtitle}
              fill
              objectFit="cover"
              quality={100}
            />
          )}
        </Box>
      </Flex>
    </>
  )
}

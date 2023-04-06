import {Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import React from 'react'

const FadeInTop = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.4}}
    >
      {children}
    </motion.div>
  )
}
export default function ImageRevealAndText({
  title = 'titre',
  paragraph = 'paragraph',
  image = '/images/model-s.webp',
}) {
  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      align="center"
      justify="space-between"
      my={10}
    >
      <FadeInTop>
        <Box flex="1" pr={{base: 0, md: 10}}>
          <Heading as="h2" size="lg" mb={5}>
            {title}
          </Heading>
          <Text fontSize="lg">{paragraph}</Text>
        </Box>
      </FadeInTop>
      <FadeInTop>
        <Box flex="1">
          <Image
            src={image}
            objectFit="cover"
            w="100%"
            h={{base: 'auto', md: '100%'}}
          />
        </Box>
      </FadeInTop>
    </Flex>
  )
}

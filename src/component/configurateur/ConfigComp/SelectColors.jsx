import {Box, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {colors} from '../../ui/color'

export default function SelectColors({
  colorsCar,
  setSelectedColor,
  selectedCar,
  selectedColor,
  state,
}) {
  return (
    <Flex flexDirection={'row'} gap={2}>
      {colorsCar?.map((e, index) => (
        <Box
          cursor={'pointer'}
          border={'3px solid white'}
          boxShadow={
            state?.selectedColor === index
              ? `0 0 0 3px ${colors.blue}`
              : `0 0 0 0px ${colors.blue}`
          }
          transition={'0.5s'}
          borderRadius={'50%'}
          onClick={() => setSelectedColor(index)}
        >
          <Image src={e.image} width={40} height={40} />
        </Box>
      ))}
    </Flex>
  )
}

import {Box, Flex, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {colors} from '../../ui/color'
import {colorsInternCar} from '../../helpers/constantes'
export default function SelectInternColors({setSelectedInternColor, state}) {
  return (
    <>
      <Flex flexDirection={'row'} gap={2}>
        {colorsInternCar?.map((e, index) => (
          <Box
            cursor={'pointer'}
            border={'3px solid white'}
            boxShadow={
              state?.selectedInterColor === index
                ? `0 0 0 3px ${colors.blue}`
                : `0 0 0 0px ${colors.blue}`
            }
            transition={'0.5s'}
            borderRadius={'50%'}
            onClick={() => setSelectedInternColor(index)}
          >
            <Image src={e.image} width={40} height={40} />
          </Box>
        ))}
      </Flex>
      <Flex
        flexDirection={'row'}
        justifyContent={'center'}
        gap={2}
        w={'100%'}
        h={'auto'}
      >
        <Text variant={'menuLink'}>
          {colorsInternCar[state?.selectedInterColor]?.name}
        </Text>
        <Text variant={'lightSubtile'} mt={1}>
          {colorsInternCar[state?.selectedInterColor]?.prix}
        </Text>
      </Flex>
      <Text textAlign={'center'} variant={'tinyFont'}>
        {colorsInternCar[state?.selectedInterColor]?.description}
      </Text>
    </>
  )
}

import {Box, Flex, Text} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import {colors} from '../../ui/color'

export default function SelectedWheels({wheelscar, setSelectedColor, state}) {
  return (
    <>
      <Flex flexDirection={'row'} gap={2}>
        {wheelscar?.map((e, index) => (
          <Box
            cursor={'pointer'}
            border={'3px solid white'}
            boxShadow={
              state?.selectedWheels === index
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
      <Flex
        flexDirection={'row'}
        justifyContent={'center'}
        gap={2}
        w={'100%'}
        h={'auto'}
      >
        <Text variant={'menuLink'}>
          {wheelscar[state?.selectedWheels]?.name}
        </Text>
        <Text variant={'lightSubtile'} mt={1}>
          {wheelscar[state?.selectedWheels]?.prix}
        </Text>
      </Flex>
      <Text textAlign={'center'} variant={'lightSubtile'} mt={-4}>
        {wheelscar[state?.selectedWheels]?.description}
      </Text>
    </>
  )
}

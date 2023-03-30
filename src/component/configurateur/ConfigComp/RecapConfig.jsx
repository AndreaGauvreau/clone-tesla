import {ChevronUpIcon} from '@chakra-ui/icons'
import {Flex, Icon, Text} from '@chakra-ui/react'
import React from 'react'

export default function RecapConfig({state}) {
  return (
    <Flex
      position={'absolute'}
      bottom="0"
      left={'50%'}
      transform={'translate(-50%,0)'}
      flexDirection="row"
      alignItems={'center'}
      bg={'#00000020'}
      p={4}
      borderRadius={'20px 20px 0px 0px '}
      justifyContent="space-around"
      w={'90%'}
    >
      <Icon
        bg={'white'}
        boxSize={10}
        p={2}
        borderRadius={20}
        boxShadow={'lg'}
        as={ChevronUpIcon}
      />
      <Text variant={'menuLink'}>
        {state?.price}€ avant déduction des économies
      </Text>
      <Text variant={'menuLink'}>
        -10 500 € d'économies de carburant estimées
      </Text>
    </Flex>
  )
}

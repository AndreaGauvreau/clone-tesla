import {Flex, Heading, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import React from 'react'

export default function PerformanceDetail() {
  return (
    <Flex flexDirection={'column'} alignItems="center">
      <Heading variant={'headModelsub'}>Pack Performance</Heading>
      <Text>De série</Text>

      <UnorderedList>
        <ListItem>
          <Text variant={'nolinkText'}>
            Vitesse maximale : jusqu'à 250 km/h
          </Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Jantes Überturbine 21"</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Freins Performance</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Suspensions abaissées</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Pédalier en aluminium</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Aileron en fibre de carbone</Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}

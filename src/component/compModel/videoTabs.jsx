'use client'
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Heading,
  Text,
} from '@chakra-ui/react'
import React from 'react'

export default function VideoTabs({src, tabs}) {
  return (
    <>
      <Flex
        bg={'black'}
        flexDirection={'column'}
        justifyContent="center"
        alignItems={'center'}
        h={'85vh'}
      >
        <Box
          w={{base: '90%', lg: '900px'}}
          h={'400px'}
          borderRadius={'20px'}
          overflow="hidden"
          position={'relative'}
        >
          <video
            autoPlay
            loop
            muted
            src={src}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </Box>
        <Flex
          w={{base: '100%', lg: '900px'}}
          h={'200px'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          mt={{base: 10, md: 20}}
        >
          <Tabs
            color={'white'}
            border={'0px solid transparent'}
            w={{base: '80%', lg: '50%'}}
          >
            <TabList border={'0px solid transparent'} pl={2}>
              <Tab
                border={'0px solid transparent'}
                w={'10px'}
                h={'10px'}
                borderRadius={100}
                bg={'#ffffff50'}
                _active={{bg: 'white'}}
                _selected={{bg: 'white'}}
                mx={1}
                p={'7px'}
              />
              <Tab
                border={'0px solid transparent'}
                w={'10px'}
                h={'10px'}
                borderRadius={100}
                bg={'#ffffff50'}
                _active={{bg: 'white'}}
                _selected={{bg: 'white'}}
                mx={1}
                p={'7px'}
              />{' '}
              <Tab
                border={'0px solid transparent'}
                w={'10px'}
                h={'10px'}
                borderRadius={100}
                bg={'#ffffff50'}
                _active={{bg: 'white'}}
                _selected={{bg: 'white'}}
                mx={1}
                p={'7px'}
              />{' '}
              <Tab
                border={'0px solid transparent'}
                w={'10px'}
                h={'10px'}
                borderRadius={100}
                bg={'#ffffff50'}
                _active={{bg: 'white'}}
                _selected={{bg: 'white'}}
                mx={1}
                p={'7px'}
              />{' '}
              <Tab
                border={'0px solid transparent'}
                w={'10px'}
                h={'10px'}
                borderRadius={100}
                bg={'#ffffff50'}
                _active={{bg: 'white'}}
                _selected={{bg: 'white'}}
                mx={1}
                p={'7px'}
              />
            </TabList>

            <TabPanels mt={5}>
              <TabPanel>
                <Flex flexDirection={'column'} gap={2}>
                  <Heading size="md">{tabs?.title1}</Heading>
                  <Text mt={2} variant={'basicmedium'}>
                    {tabs?.desc1}
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDirection={'column'} gap={2}>
                  <Heading size="md">{tabs?.title2}</Heading>
                  <Text mt={2} variant={'basicmedium'}>
                    {tabs?.desc2}
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDirection={'column'} gap={2}>
                  <Heading size="md">{tabs?.title3}</Heading>
                  <Text variant={'basicmedium'} mt={2}>
                    {tabs?.desc3}
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDirection={'column'} gap={2}>
                  <Heading size="md">{tabs?.title4}</Heading>
                  <Text mt={2} variant={'basicmedium'}>
                    {tabs?.desc4}
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDirection={'column'} gap={2}>
                  <Heading size="md">{tabs?.title5}</Heading>
                  <Text mt={2} variant={'basicmedium'}>
                    {tabs?.desc5}
                  </Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  )
}

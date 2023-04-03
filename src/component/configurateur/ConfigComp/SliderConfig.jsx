import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {Box, IconButton} from '@chakra-ui/react'
import Image from 'next/image'
import React, {useState} from 'react'

export default function SliderConfig({listImage, setSliderIndex, state}) {
  const incrementSliderIndex = () => {
    const newIndex = (state.sliderindex + 1) % listImage.length
    setSliderIndex(newIndex)
  }

  const decrementSliderIndex = () => {
    const newIndex =
      (state.sliderindex - 1 + listImage.length) % listImage.length
    setSliderIndex(newIndex)
  }

  return (
    <>
      <IconButton
        position={'absolute'}
        right={10}
        top={'50%'}
        icon={<ArrowForwardIcon />}
        zIndex={10}
        onClick={incrementSliderIndex}
      />
      <IconButton
        position={'absolute'}
        left={10}
        top={'50%'}
        icon={<ArrowBackIcon />}
        zIndex={10}
        onClick={decrementSliderIndex}
      />
      {listImage?.map((e, index) => {
        return (
          <Box
            opacity={state?.sliderindex === e?.id ? 1 : 0}
            transition="opacity 0.3s ease-in-out"
          >
            <Image
              src={e?.image}
              fill
              objectFit={state?.sliderindex >= 3 ? 'cover' : 'contain'}
              priority={state?.sliderindex === e?.id ? true : false}
            />
          </Box>
        )
      })}
    </>
  )
}

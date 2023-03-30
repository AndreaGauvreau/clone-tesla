import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {Box, IconButton} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

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
            transition={'0.3s'}
          >
            <Image
              src={e?.image}
              fill
              objectFit="contain"
              priority={state?.sliderindex === e?.id ? true : false}
            />
          </Box>
        )
      })}
    </>
  )
}

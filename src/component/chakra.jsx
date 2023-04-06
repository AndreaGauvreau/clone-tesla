'use client'
import {
  ChakraProvider,
  Checkbox,
  extendTheme,
  ColorModeScript,
  useColorMode,
} from '@chakra-ui/react'
import React, {useCallback} from 'react'
import '../component/gotham.css'
import {colors} from './ui/color'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Gotham Book, sans-serif',
    body: 'Gotham Medium, sans-serif',
  },
  components: {
    Text: {
      variants: {
        linkText: {
          fontSize: '14px',
          fontWeight: '200',
          textDecoration: 'underline',
          fontFamily: 'Gotham Book',
          textUnderlineOffset: '3px',
        },
        nolinkText: {
          fontSize: '14px',
          fontWeight: '200',
          fontFamily: 'Gotham Book',
        },
        linkNoText: {
          fontSize: '17px',
          fontWeight: '200',
          textDecoration: 'none',
          fontFamily: 'Gotham Medium',
        },
        menuLink: {
          fontSize: '14px',
          lineHeight: '14px',
          fontFamily: 'Gotham Medium',
        },
        tinyFont: {
          fontSize: '13px',
          fontFamily: 'Gotham Light',
          lineHeight: '14px',
        },
        mediumFont: {
          fontSize: '24px',
          lineHeight: '18px',
          fontWeight: '900',
          fontFamily: 'Gotham Book',
        },
        smallFont: {
          fontSize: '14px',
          lineHeight: '14px',
          fontWeight: '900',
          fontFamily: 'Gotham Book',
        },
        lightSubtile: {
          fontSize: '14px',
          lineHeight: '14px',
          fontWeight: '500',
          fontFamily: 'Gotham Book',
        },
      },
    },
    Heading: {
      variants: {
        headModel: {fontSize: '40px', lineHeight: '30px'},
        headModelsub: {fontSize: '28px', lineHeight: '25px'},
      },
    },
    Button: {
      variants: {
        BtnLlink: {
          bg: colors.btn1,
          color: 'white',
          borderRadius: 5,
          w: {base: 'full', md: '350px'},
          fontSize: '14px',
          fontWeight: 'normal',
        },
        BtnRlink: {
          color: colors.btn1,
          bg: 'white',
          borderRadius: 5,
          w: {base: 'full', md: '350px'},
          fontSize: '14px',
          fontWeight: 'normal',
        },
        btnSmall: {
          color: colors.btn1,
          bg: '#00000010',
          borderRadius: 5,
          w: {base: 'full', md: '50%'},
          fontSize: '12px',
          fontWeight: 'normal',
        },
        btnCommand: {
          bg: 'transparent',
          border: '3px solid white',
          color: 'white',
          borderRadius: '3px',
          fontSize: '14px',
          lineHeight: '14px',
          fontWeight: '400',
          fontFamily: 'Gotham Medium',
          px: '50px',
          _hover: {bg: 'white', color: 'black'},
        },
      },
    },
  },
})

export function ToggleThemeCheckbox() {
  const {colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode === 'dark'

  const handleChange = useCallback(() => {
    toggleColorMode()
  }, [toggleColorMode])

  return (
    <Checkbox isChecked={isDark} onChange={handleChange}>
      Dark mode
    </Checkbox>
  )
}

export default function Chakra({children}) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}

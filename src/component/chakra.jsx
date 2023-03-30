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
        linkNoText: {
          fontSize: '17px',
          fontWeight: '200',
          textDecoration: 'none',
          fontFamily: 'Gotham Medium',
        },
        menuLink: {fontSize: '14px'},
      },
    },
    Heading: {
      variants: {
        headModel: {fontSize: '40px', lineHeight: '30px'},
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
        head3: {fontSize: '18px'},
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

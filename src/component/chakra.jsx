'use client'
import {
  ChakraProvider,
  Checkbox,
  extendTheme,
  ColorModeScript,
  useColorMode,
} from '@chakra-ui/react'
import React, {useCallback} from 'react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config})

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

import React from 'react'
import { render } from 'react-dom'
import Screen from './screen'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Screen />
    </ChakraProvider>
  )
}

render(<App />, document.getElementById('root'))

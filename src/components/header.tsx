import React, { useCallback, useMemo, memo } from 'react'
import { FiX, FiMinus, FiMaximize2, FiSquare, FiMaximize } from 'react-icons/fi'

import { ipcRenderer } from 'electron'

import os from 'os'
import { Box, Button, Flex } from '@chakra-ui/react'

const Header: React.FC = () => {
  const handleClose = useCallback(() => {
    ipcRenderer.send('close-window')
  }, [])

  const handleMaximize = useCallback(() => {
    ipcRenderer.send('maximize-window')
  }, [])

  const handleMinimize = useCallback(() => {
    ipcRenderer.send('minimize-window')
  }, [])
  return (
    <Flex
      w="100%"
      h="40px"
      bg="#282a36"
      color="#f8f8f2"
      fontFamily="Ubuntu"
      fontSize="12px"
      position="relative"
      alignItems="center"
      sx={{'-webkit-app-region': 'drag'}}
      style={{
        WebkitUserSelect: 'none',
      }}
      justifyContent="center"
      borderBottom="1px solid #44475a"
    >
      <strong>Electron React Boilerplate</strong>
    <Flex pos="absolute" top="0" h="100%" alignItems="center" right="16px">
      <Button
        sx={{'-webkit-app-region': 'no-drag'}}
        bg="transparent"
        border="0"
        alignItems="center"
        justifyContent="center"
        _hover={{bg: 'transparent'}}
        _active={{bg: 'transparent', color: "#44475a"}}
        _focus={{bg: 'transparent'}}
        onClick={handleMinimize}
      >
        <FiMinus />
      </Button>
      <Button
        sx={{'-webkit-app-region': 'no-drag'}}
        bg="transparent"
        border="0"
        alignItems="center"
        justifyContent="center"
        _hover={{bg: 'transparent'}}
        _active={{bg: 'transparent', color: "#44475a"}}
        _focus={{bg: 'transparent'}}
        onClick={handleMaximize}
      >
        <FiMaximize />
      </Button>
      <Button
        sx={{'-webkit-app-region': 'no-drag'}}
        bg="transparent"
        border="0"
        alignItems="center"
        justifyContent="center"
        _hover={{bg: 'transparent'}}
        _active={{bg: 'transparent', color: "#44475a"}}
        _focus={{bg: 'transparent'}}
        onClick={handleClose}
      >
        <FiX />
      </Button>
    </Flex>

    </Flex>

  )
}

export default Header

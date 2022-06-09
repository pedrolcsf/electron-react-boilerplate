import { Flex } from '@chakra-ui/react';
import React from 'react'
import Header from '../components/header';

const Screen: React.FC = () => {
  return (
    <Flex border="1px solid #44475a" w="100%" h="100vh" bg="#282a36">
      <Header />
    </Flex>
  )
}

export default Screen;

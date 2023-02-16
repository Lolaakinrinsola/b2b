import React from 'react';
import logo from './images/b2blogo.png';
import { Image, Flex ,Button} from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Flex justifyContent='space-between' mt='64px' px='100px'>
        <Image src={logo} />
        <Button
        variant='outline'
        border='2px'
        borderRadius='100px'
        borderColor='linear-gradient(112.92deg, #5404FF 18.35%, rgba(189, 59, 210, 0.94) 71.49%)'
        >Get Priority Access</Button>
    </Flex>
  )
}

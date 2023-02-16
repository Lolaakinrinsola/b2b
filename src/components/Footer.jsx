import React from 'react';
import { Grid, Box, Heading, Text, Input, VStack, HStack,Button,Image} from '@chakra-ui/react'
import house from './images/Vector.png'

export const Footer = () => {
  return (
    <div>
      <Box borderTop='solid' pt='36px' alignItems='center' w='85vw'display='flex' justifyContent='space-between' mx='120px' pb='76px'>
        <Box display='flex'gap='10px' justifyContent='space-between' alignItems='center' >
          <Image src={house} boxSize='20px'/>
          <Text w='287px'>
          2nd Floor, The Garnet Building,
           KM14 Lekki Epe Expressway, Lagos, Nigeria.
          </Text>
        </Box>
        <Box>
          <Text>
          Loyalbaze is almost here.
          </Text>
        </Box>
        <Box display='flex'>
          <Text>+234 903 618 9485</Text>
        </Box>
      </Box>
    </div>
  )
}

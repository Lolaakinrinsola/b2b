import React from 'react';
import { Grid, Box, Heading, Text, Input, VStack, HStack,Button,Image} from '@chakra-ui/react'
import headerlogo from './images/headerlogo.png'
import small from './images/smallcircle.png'
import big from './images/bigcircle.png'
import smallstar from './images/Star 2.png'
import bigstar from './images/Star 5.png'
import arrow from './images/Vector (1).png'
import shade from './images/shadedcircle.png'
const Header = () => {
  return (
    <VStack display='grid' justifyContent='space-around' alignItems='center' height='100vh' >
        <Box position='absolute' top='203px' left='36px'>
          <Image src={big}/>
        </Box>
      <Box display='flex' justifyContent='right' >
        <Image src={small} />
      </Box>
      <Box position='absolute'  top='114px' left='461px'>
        <Image src={smallstar} />
      </Box>

      <Box display='grid' alignItems='center' justifyContent='center' >
        <Heading align='center' w='800px' fontSize='64px' justifyContent='center'm='auto'>
        Turn your best customers into <Heading as='span' color='rgb(167, 95, 210)' fontSize='64px'>
         Loyal fans
        </Heading>
        </Heading>
        <Box position='absolute'  top='314px' left='1159px'>
          <Image src={smallstar} />
        </Box>
        <Box position='absolute' top='203px' right='1px'>
          <Image src={shade}/>
        </Box>
        <Text align='center' width='938px' mb='30px' mt='12px' p='0' fontSize='24px'>
        Loyalbaze, empowers businesses to offer digital,
         mobile-first loyalty programs to their customers. 
         With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, 
         track customer engagement, and gain valuable insights to improve your business.
         Sign up now to get early access.
        </Text>
        <Box position='absolute'  top='514px' left='1159px'>
          <Image src={arrow} />
        </Box>
        <Box position='absolute'  top='673px' left='157px'>
          <Image src={bigstar} />
        </Box>
        <Box position='absolute'  top='600px' left='1392px'>
          <Image src={bigstar} />
        </Box>
        <Box display='grid' alignItems='center' gap='30px' justifyContent='center' m='auto' w='100%'>
          <Input placeholder='Tell us your name' w='443px'/>
          <Input placeholder='Enter your email address' w='443px'/>
          <Button
           borderRadius='100px' bg=' linear-gradient(112.92deg, #5404FF 18.35%, rgba(189, 59, 210, 0.94) 71.49%)'
          >
            Get early access
          </Button>
          <HStack justifyContent='center'>
            <Image src={headerlogo} />
            <Text> +57 joined</Text>
          </HStack>
        </Box>
      </Box>
    </VStack>
    )
}

export default Header
import React from 'react'
import { Box, Heading, Text, Input, VStack, HStack,Button,Image} from '@chakra-ui/react'
import check from './images/Group 243.png';
const Cardpopup = () => {
  return (
    <Box display='grid' justifyContent='center' m='auto' alignItems='center'>
        <Box display='grid' w='50vw' bg='#1E1E1E' borderRadius='20px' h='70vh' m='auto'>
            <Image src={check} m='auto'/>
            <Box w='100%'>

                <Heading align='center'>
                    Congratulations
                </Heading>
                <Text align='center' mt='20px' >
                Great move! You're one step closer to getting your hands on the product.
                <br/>Please check your mail for more information.
                </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Cardpopup
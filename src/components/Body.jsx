import React from 'react';
import { Grid, Box, Heading, Text, Input, Vstack, Hstack,FormControl,FormLabel,FormErrorMessage,Image,FormHelperText,Textarea,Select,Button,Modal,
    ModalOverlay,
    ModalContent,ModalBody, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import small from './images/smallcircle.png'
import big from './images/bigcircle.png'
import smallstar from './images/Star 2.png'
import bigstar from './images/Star 5.png'
import line from './images/Line 6.png'
import Cardpopup from './Cardpopup';
const Body = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
        <Box display={{base:'grid', lg:'flex'}} h='100vh' alignItems='center' justifyContent='space-around' gap='56px'>
        <Box position='absolute' justifyContent='right' top='851px' left='138px'>
            <Image src={small} />
        </Box>
        <Box position='absolute' justifyContent='right' top='951px' left='418px'>
            <Image src={smallstar} />
        </Box>
        <Box position='absolute' justifyContent='right' top='1061px' left='250px'>
            <Image src={line} />
        </Box>
            <Box>
                <Heading mb='88px' fontSize='64px'>
                    Priority Access
                </Heading>
                <Text w='525px' fontSize='24px'>
                Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. 
                Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available.
                Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
                </Text>
            </Box>
            <Box w='633px' bg='#1D2939' h='637px' py='56px' borderRadius='20px' justifyContent='center' display='grid'>
                <Heading>
                    Book a Consultation with us
                </Heading>
                <Modal isOpen={isOpen} onClose={onClose} position='absolute' border='solid'>
                        <ModalOverlay onClick={onClose} />
                        <ModalContent>
                            <ModalBody>
                                <Cardpopup/>
                            </ModalBody>
                        </ModalContent>
                </Modal>
                <Box >
                    <FormLabel w='494px' >
                        <Input placeholder='Enter your full name' type='text' mb='20px'/>
                        <Input placeholder='Enter your work email' type='text' mb='20px'/>
                        <Input placeholder='Mobile number' type='number' mb='20px'/>
                        <Input placeholder='Company Name' type='text' mb='20px'/>
                        <Select placeholder='Select country'mb='20px'>
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                        </Select>
                        <Textarea placeholder='Drop a message...' mb='20px'/>
                        <Button
                        onClick={onOpen}
                        w='100%' borderRadius='100px' bg=' linear-gradient(112.92deg, #5404FF 18.35%, rgba(189, 59, 210, 0.94) 71.49%)'>
                            Send Request
                        </Button>
                    </FormLabel>
                    
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Body
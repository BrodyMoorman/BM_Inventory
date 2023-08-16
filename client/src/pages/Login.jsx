import React from 'react'
import { useState } from 'react'
import { Stack, Flex, Text, Input, InputGroup, InputRightElement, Button, } from '@chakra-ui/react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        console.log(email, password)
        setEmail('')
        setPassword('')
    }
   
  return (
    <Flex align='center' justify='center' bg='lightgrey' w='full' h ='fill'>
        <Flex flexDirection='column' align='center' justify='center' bg='white' p='50px' rounded='xl' >
            <Text fontSize='4xl' fontWeight='bold' color='black' marginBottom='30px'>Login</Text>
            <Stack spacing={3} w={['200px', '400px']}>
            <Input variant='outline' placeholder='E-Mail' value={email} onChange={handleEmailChange} />
            <Input variant='outline' type='password' placeholder='Password' value={password} onChange={handlePasswordChange} />
            <Button colorScheme='teal' onClick={handleLogin} >Sign In</Button>
            
            </Stack>
            <Text fontSize='sm' fontWeight='bold' color='gray' marginBottom='30px'>Don't have an account? Register.</Text>

        </Flex>
    </Flex>
  )
}

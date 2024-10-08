import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);
    const submitHandler = () => { };


    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='email' isRequired>
                <FormLabel>
                    Email Address
                </FormLabel>
                <Input
                    placeholder='Enter your email address'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme='blue'
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Login
            </Button>

            <Button
                colorScheme='red'
                variant={'solid'}
                width={"100%"}
                onClick={() => {
                    setEmail("guest@example.com");
                    setPassword('123456');
                }}
            >
                Login as Guest
            </Button>
        </VStack>
    );
};

export default Login

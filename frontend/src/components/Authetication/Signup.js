import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Show, VStack } from '@chakra-ui/react'
const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const postDetails = (pics) => { };
    const submitHandler = () => { };


    return (
        <VStack spacing={'5px'} color={'black'}>
            <FormControl id='first-name' isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
            <FormControl id='password' isRequired>
                <FormLabel>
                    Confirm Password
                </FormLabel>
                <InputGroup size={'md'}>
                    <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Confirm password'
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <InputRightElement width={"4.5rem"}>
                        <Button h={'1.75rem'} size={'sm'} onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>
                    Upload your Picture
                </FormLabel>
                <Input
                    type='file'
                    p={1.5}
                    accept='image/*'
                    placeholder='No file chosen'
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>


            <Button
                colorScheme='blue'
                width={"100%"}
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Sign up
            </Button>
        </VStack>
    );
};

export default Signup

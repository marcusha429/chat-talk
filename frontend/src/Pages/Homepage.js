import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from "../components/Authetication/Login"
import Signup from "../components/Authetication/Signup"
import { useHistory } from 'react-router-dom/';
const Homepage = () => {
    const history = useHistory()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"))

        if (user) history.push("/chat")
    },
        [history])
    return (
        <Container maxW='xl' centerContent>
            <Box
                display={"flex"}
                justifyContent={"center"}
                p={3}
                bg={"white"}
                w={"100%"}
                m={"40px 0 15px 0"}
                borderRadius={"lg"}
                borderWidth={"1px"}>
                <Text
                    fontSize={'4x1'}
                    fontFamily={"Work sans"}
                    color={"black"}>
                    Chat-Talk
                </Text>
            </Box>
            <Box
                bg={"white"}
                w={"100%"}
                p={4}
                borderRadius={"lg"}
                borderWidth={"1px"}
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb={"1em"}>
                        <Tab width={"50%"}>Login</Tab>
                        <Tab width={"50%"}>Sign up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default Homepage
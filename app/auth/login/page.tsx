"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
 

  const onSubmit = async () => {    
    setLoading(true);
    setError(false);
    try {
        const form = {email, password};
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form)
        });
        if (!response.ok) {
            setError(true);
            setLoading(false);
            return;
        };
        const data = await response.json();
        if (data?.token) {
            route.push('/');
            setLoading(false);

        } else {
            setError(true);
            setLoading(false);

        }
    } catch (err) {
        setError(true);
        setLoading(false);
        console.log(err)
    }
};




  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
  
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {error && (
            <>
              <Alert status="error">
                <AlertIcon />
                There was an error processing your request
              </Alert>
              <br />
            </>
          )}

          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(event: any) => handleEmailChange(event)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(event: any) => handlePasswordChange(event)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link href="/auth/forgotPassword" color={"blue.400"}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmit}
              >
                {loading ? <Spinner /> : "Sign in"}
              </Button>
            </Stack>
            <Stack>
              <Link color={"blue.400"} href="/auth/register">
                Don't have an account yet?
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

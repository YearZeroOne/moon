"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import PocketBase from "pocketbase";
import { useState } from "react";
import * as yup from "yup";

export default function Register() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const data = {
    email: email,
    password: password,
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("companyRequired"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .test("password-should-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

  const [eachFieldStateValidation, setEachFieldStateValidation] = useState({
    email: { valid: true, error: "" },
    password: { valid: true, error: "" },
    passwordConfirmation: { valid: true, error: "" },
  });
  const validateSingleField = (path: string, input: any) => {
    // `reach()` pulls out a child schema so we can test a single path
    const field: any = yup.reach(validationSchema, path);

    field
      .validate(input)
      .then(() =>
        setEachFieldStateValidation({
          ...eachFieldStateValidation,
          [path]: { valid: true, error: "" },
        })
      ) // if valid set true
      .catch((e: any) => {
        console.log(e);
        setEachFieldStateValidation({
          ...eachFieldStateValidation,
          [path]: { valid: false, error: e.errors.join(", ") },
        });
      }); // if invalid set false
  };
  const createUser = async () => {
    try {
      await pb.collection("users").create(data);
    } catch (error) {
      console.log(error);
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
          <Heading fontSize={"4xl"}>Sign up</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(event: any) => {
                  setEmail(event.target.value);
                  validateSingleField("email", event.target.value);
                }}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(event: any) => {
                  setPassword(event.target.value);
                  validateSingleField("passowrd", event.target.value);
                }}
              />
            </FormControl>
            <FormControl id="passwordConfirmation">
              <FormLabel>Re-enter</FormLabel>
              <Input
                type="confirmPassword"
                onChange={(event: any) => {
                  validateSingleField("confirmPassword", event.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack>
              <Link color={"blue.400"} href="/auth/login">
                Already have an account?
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

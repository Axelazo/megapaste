import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  chakra,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";

import Logo from "components/Logo";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const linkProps = {
    as: ReachLink,
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" justifyContent="space-around" alignItems="center">
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              p="5"
              backgroundColor="whiteAlpha.900"
              boxShadow="lg"
              borderRadius="xl"
            >
              <Logo width="40" m="0 auto" />
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    mb="5"
                  />
                </InputGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    mb="5"
                  />
                  <InputRightElement Button h="2.5rem" size="xl">
                    {" "}
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button colorScheme="red" width="full">
                  Login
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box mt="5">
        Don't have an account?{" "}
        <Link to="/register" {...linkProps} color="red.500">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
}

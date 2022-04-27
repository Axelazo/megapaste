import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Box,
  HStack,
  Button,
  Spacer,
  InputGroup,
  Center,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { FaSearch, FaTrash, FaPlus, FaEdit } from "react-icons/fa";

export default function Users() {
  return (
    <Flex flex="1" p="10">
      <Box minW="100%">
        <HStack>
          <Center flexGrow="1" justifyContent="center" alignContent="center">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                children={<FaSearch />}
              />
              <Input
                id="username"
                type="text"
                placeholder="Search user by name, email, type, status..."
                mb="5"
              />
            </InputGroup>
          </Center>
          <Box>
            <Button colorScheme="green">
              <FaPlus />
              Create User
            </Button>
          </Box>
        </HStack>
        <TableContainer h="70vh" maxH="70vh" overflowY="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Type</Th>
                <Th>Status</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Axel Aguilar</Td>
                <Td>herdezx@gmail.com</Td>
                <Td>Administrator</Td>
                <Td>Active</Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify User
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete User
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>Ernesto Orellana</Td>
                <Td>neto98@gmail.com</Td>
                <Td>Moderator</Td>
                <Td>Active</Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify User
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete User
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}

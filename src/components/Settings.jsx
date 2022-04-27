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
  FormLabel,
} from "@chakra-ui/react";

import { FaSearch, FaTrash, FaPlus, FaEdit } from "react-icons/fa";

export default function Settings() {
  return (
    <Flex flex="1" p="10">
      <Box minW="100%">
        <FormLabel htmlFor="sitename">Site Name</FormLabel>
        <InputGroup>
          <Input
            id="sitename"
            type="text"
            placeholder="Nombre del sitio"
            mb="5"
            value="Mega Paste"
          />
        </InputGroup>
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

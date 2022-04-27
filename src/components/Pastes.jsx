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
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
  Spacer,
  Badge,
  Center,
} from "@chakra-ui/react";

import { FaSearch, FaPlus, FaTrash, FaEye, FaEdit } from "react-icons/fa";

export default function Pastes() {
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
                placeholder="Search paste by title, content, user..."
                mb="5"
              />
            </InputGroup>
          </Center>
          <Box>
            <Button colorScheme="green">
              <FaPlus />
              New Paste
            </Button>
          </Box>
        </HStack>
        <TableContainer h="70vh" maxH="70vh" overflowY="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>SubPastes</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Halo (2022) 1080p dual spanish-english{" "}
                  <Badge ml="1" colorScheme="green">
                    NEW
                  </Badge>
                </Td>
                <Td>
                  <HStack>
                    <Box>4</Box>
                    <Box>
                      <Badge ml="1" colorScheme="yellow">
                        2 reports
                      </Badge>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="blue">
                      <FaEye />
                      View Paste
                    </Button>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify Paste
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete Paste
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Moonfall (2022) 1080p dual spanish-english{" "}
                  <Badge ml="1" colorScheme="green">
                    NEW
                  </Badge>
                </Td>
                <Td>
                  <HStack>
                    <Box>5</Box>
                    <Box></Box>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="blue">
                      <FaEye />
                      View Paste
                    </Button>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify Paste
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete Paste
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>Moon Knight (2022) 1080p dual spanish-english </Td>
                <Td>
                  <HStack>
                    <Box>5</Box>
                    <Box></Box>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="blue">
                      <FaEye />
                      View Paste
                    </Button>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify Paste
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete Paste
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td>Soho Hotel (2022) 1080p dual spanish-english </Td>
                <Td>
                  <HStack>
                    <Box>5</Box>
                    <Box></Box>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <Spacer></Spacer>
                    <Button colorScheme="blue">
                      <FaEye />
                      View Paste
                    </Button>
                    <Button colorScheme="yellow">
                      <FaEdit />
                      Modify Paste
                    </Button>
                    <Button colorScheme="red">
                      <FaTrash />
                      Delete Paste
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

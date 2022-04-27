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
  Badge,
} from "@chakra-ui/react";

import { FaCheck, FaEye, FaEdit } from "react-icons/fa";

export default function Issues() {
  return (
    <Flex flex="1" p="10">
      <Box minW="100%">
        <TableContainer h="70vh" maxH="70vh" overflowY="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Issue</Th>
                <Th>Paste</Th>
                <Th textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Enlace de Mega no esta funcionando
                  <Badge ml="1" colorScheme="green">
                    NEW
                  </Badge>
                </Td>
                <Td>Soho Hotel (2022) 1080p dual spanish-english</Td>
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
                    <Button colorScheme="green">
                      <FaCheck />
                      Mark as Solved
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

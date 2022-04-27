import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";

export default function View() {
  return (
    <Flex alignItems={"center"} justify="space-around" height={"90vh"}>
      <Box
        maxW="900"
        w="900px"
        p="5"
        backgroundColor="whiteAlpha.900"
        boxShadow="xl"
        borderRadius="xl"
      >
        <Tabs variant="enclosed" colorScheme="red">
          <TabList>
            <Tab>Titulo Paste</Tab>
          </TabList>
          <TabPanels>
            <TabPanel h="400px" maxH="400px" overflowY="auto"></TabPanel>
            <Center>
              <Box mt="5">Visitas: 0</Box>
            </Center>
            <Box>
              <Button colorScheme="yellow">Reportar</Button>
            </Box>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}

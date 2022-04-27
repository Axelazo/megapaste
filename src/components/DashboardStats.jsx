import {
  Stat,
  StatLabel,
  StatNumber,
  Spacer,
  Box,
  Badge,
  Flex,
} from "@chakra-ui/react";

export default function DashboardStats(props) {
  return (
    <Flex flex="1" p="10">
      <Box>
        <Stat>
          <StatLabel>Total Paste Count</StatLabel>
          <StatNumber>256</StatNumber>
        </Stat>
      </Box>
      <Spacer />
      <Box>
        <Stat>
          <StatLabel>Issues</StatLabel>
          <StatNumber>24</StatNumber>
          <Box>
            <Badge colorScheme="green">20 RESOLVED</Badge>
            <Badge colorScheme="red">4 UNRESOLVED</Badge>
          </Box>
        </Stat>
      </Box>
      <Spacer />
      <Box>
        <Stat>
          <StatLabel>Registered users</StatLabel>
          <StatNumber>6</StatNumber>
        </Stat>
      </Box>
    </Flex>
  );
}

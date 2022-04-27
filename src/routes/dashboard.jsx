import Header from "components/Header";
import DashboardContent from "components/DashboardContent";
import { Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box height="100vh">
      <Header />
      <DashboardContent />
    </Box>
  );
}

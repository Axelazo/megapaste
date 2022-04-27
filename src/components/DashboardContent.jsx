import { Flex } from "@chakra-ui/react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

export default function DashboardContent() {
  return (
    <Flex justify="space-between" height={"92vh"} width="100%" minWidth="100%">
      <Menu />
      <Flex flex="1">
        <Outlet />
      </Flex>
    </Flex>
  );
}

import { Link, VStack, Divider, HStack, Box, Stack } from "@chakra-ui/react";
import { NavLink as ReachLink } from "react-router-dom";
import {
  FaBuffer,
  FaFileAlt,
  FaInfoCircle,
  FaCog,
  FaUserAlt,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { useState } from "react";

import "../App.css";

export default function Menu() {
  const linkProps = {
    as: ReachLink,
    w: "100%",
    p: 5,
    _hover: {
      textDecoration: "none",
      bg: "gray.200",
      color: "#000",
      transition: "0.5s",
    },
  };

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => setToggleSidebar(!toggleSidebar);

  return (
    <VStack
      minW="15vw"
      bgColor="#000"
      color="#fff"
      padding="0"
      className={toggleSidebar ? "hide-sidebar" : "show-sidebar"}
    >
      <Stack className="sidebar-toggle" onClick={handleToggleSidebar}>
        <VStack>
          <HStack alignSelf="center">
            {toggleSidebar ? <FaAngleRight /> : <FaAngleLeft />}
          </HStack>
        </VStack>
      </Stack>
      <Link end to="" {...linkProps} margin="0">
        <HStack>
          <Box>
            <FaBuffer />
          </Box>
          <Box>Dashboard</Box>
        </HStack>
      </Link>
      <Link end to="pastes" {...linkProps}>
        <HStack>
          <Box>
            <FaFileAlt />
          </Box>
          <Box>Pastes</Box>
        </HStack>
      </Link>
      <Link end to="issues" {...linkProps}>
        <HStack>
          <Box>
            <FaInfoCircle />
          </Box>
          <Box>Issues</Box>
        </HStack>
      </Link>
      <Divider />
      <Link end to="users" {...linkProps}>
        <HStack>
          <Box>
            <FaUserAlt />
          </Box>
          <Box>Users</Box>
        </HStack>
      </Link>
      <Link end to="settings" {...linkProps}>
        <HStack>
          <Box>
            <FaCog />
          </Box>
          <Box>Settings</Box>
        </HStack>
      </Link>
    </VStack>
  );
}

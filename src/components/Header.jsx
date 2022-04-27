import { Heading, Flex, Link, Spacer, Avatar } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function Header() {
  const linkProps = {
    as: ReachLink,
    p: 5,
    _hover: {
      textDecoration: "none",
      bg: "gray.200",
    },
  };
  return (
    <Flex height="8%">
      <Link to="/" {...linkProps}>
        <Heading size="md">MegaPaste</Heading>
      </Link>
      <Spacer />
      <Link to="/login" {...linkProps}>
        Login
      </Link>
      <Link to="/register" {...linkProps}>
        Register
      </Link>
      <Avatar
        name="Dan Abrahmov"
        size="md"
        src="https://bit.ly/dan-abramov"
        m="2"
      />
    </Flex>
  );
}

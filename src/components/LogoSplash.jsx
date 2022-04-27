import { Flex } from "@chakra-ui/react";
import Logo from "components/Logo";

export default function LogoSplash(props) {
  return (
    <Flex alignItems={"center"} justify="space-around" height={"90vh"}>
      <Logo width="500" />
    </Flex>
  );
}

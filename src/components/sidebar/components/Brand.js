import React from "react";

// Chakra imports
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logo from "../../../assets/img/dashboards/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      <Image width={300} height={40} src={logo} />
      {/**
       * 
      <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} />
       */}
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;

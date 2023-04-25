// chakra imports
import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";

export default function ActionButtom({
  action,
  iconName,
  color,
  path,
  dataToSend,
}) {
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  const iconColor = useColorModeValue("brand.500", "white");

  return (
    <NavLink
      to={{
        pathname: `/admin/${path}`,
        state: dataToSend,
      }}
    >
      <Flex
        align="center"
        justifyContent="center"
        bg={`${color}.100`}
        _hover={{ cursor: "pointer" }}
        _focus={bgFocus}
        _active={bgFocus}
        w="37px"
        h="37px"
        lineHeight="100%"
        onClick={action}
        borderRadius="10px"
      >
        <Icon as={iconName} color={color} w="18px" h="18px" />{" "}
      </Flex>
    </NavLink>
  );
}

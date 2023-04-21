// chakra imports
import { Icon, Flex, Text, useColorModeValue, Link } from "@chakra-ui/react";

import React from "react";
import { MdAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

export function AddButtom({ action, iconName, color }) {
  const textColor = useColorModeValue("navy.700", "white");

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
    <NavLink to="/admin/products/add">
      <Flex
        _hover={{ cursor: "pointer" }}
        justify="center"
        align="center"
        borderRadius="16px"
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        px={5}
      >
        <Icon as={MdAdd} color="white" w={8} h={14} />
        <Text
          fontWeight="bold"
          color="white"
          fontSize={{ base: "md", md: "md" }}
        >
          New Product
        </Text>
      </Flex>
    </NavLink>
  );
}

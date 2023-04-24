// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "./Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        General Information
      </Text>

      <SimpleGrid columns="3" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Address Email"
          value="email@gmail.com"
        />
        <Information
          boxShadow={cardShadow}
          title="Phone Number"
          value="51241715"
        />
        <Information boxShadow={cardShadow} title="Location" value="sousse" />
      </SimpleGrid>
    </Card>
  );
}

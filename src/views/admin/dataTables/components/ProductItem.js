import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import image from "assets/img/nfts/Nft4.png";

function ProductItem({ name, desc }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Flex direction={{ base: "column" }} justify="center">
      <Flex position="relative" align="center">
        <Image src={image} w="66px" h="66px" borderRadius="20px" me="16px" />
        <Flex
          direction="column"
          w={{ base: "70%", md: "100%" }}
          me={{ base: "4px", md: "32px", xl: "10px", "3xl": "32px" }}
        >
          <Text
            color={textColor}
            fontSize={{
              base: "md",
            }}
            mb="5px"
            fontWeight="bold"
            me="14px"
          >
            {name}
          </Text>
          <Text
            color="secondaryGray.600"
            fontSize={{
              base: "sm",
            }}
            fontWeight="400"
            me="14px"
          >
            {desc}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProductItem;
{
  /* <Flex align="center">
<Text
  me="10px"
  color={textColor}
  fontSize="sm"
  fontWeight="700"
>
  {cell.value}
</Text>
</Flex> */
}

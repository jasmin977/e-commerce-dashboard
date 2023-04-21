// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card {...rest} align="center" p="20px">
      <Flex h="100%" direction={{ base: "column", "2xl": "row" }}>
        <Dropzone
          //  w={{ base: "100%", "2xl": "268px" }}
          h="200px"
          content={
            <Box>
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Upload Product Image
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PNG and JPG files are allowed
              </Text>
            </Box>
          }
        />
      </Flex>
    </Card>
  );
}

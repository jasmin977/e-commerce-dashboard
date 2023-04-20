import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { inputStyles } from "theme/components/input";

function Filter() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Flex px="25px" justify="space-between" mb="20px" align="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <FormControl>
          <FormLabel>
            {" "}
            <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
              SHOW BY
            </Text>
          </FormLabel>

          <Select>
            <option>12 Rows</option>
            <option>24 Rows</option>
            <option>36 Rows</option>
          </Select>
        </FormControl>
        <FormControl>
          <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
            <FormLabel>CATEGORY BY</FormLabel>
          </Text>
          <Select>
            <option>BOISSAN</option>
            <option>CREMERIE</option>
          </Select>
        </FormControl>
        <FormControl>
          <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
            <FormLabel>BRAND BY</FormLabel>{" "}
          </Text>
          <Select>
            <option>JADIDA</option>
            <option>MAZARAA</option>
          </Select>
        </FormControl>
      </Grid>
    </Flex>
  );
}

export default Filter;

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Filter({ searchTerm, handleChange, handleStatusSearch }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Flex flex={1} direction={"row"} px="25px" mb="20px" gap={5}>
      <FormControl>
        <FormLabel>
          <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
            SHOW BY
          </Text>
        </FormLabel>

        <Select size="lg" variant="filled">
          <option>12 Rows</option>
          <option>24 Rows</option>
          <option>36 Rows</option>
        </Select>
      </FormControl>
      <FormControl>
        <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
          <FormLabel>STATUS BY</FormLabel>
        </Text>
        <Select size="lg" variant="filled" onChange={handleStatusSearch}>
          <option value={"pending"}>Pending</option>
          <option value={"processing"}>Processing</option>
          <option value={"completed"}>Completed</option>
          <option value={"cancelled"}>Cancelled</option>
        </Select>
      </FormControl>
      <FormControl>
        <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
          <FormLabel>ISSUED BY</FormLabel>{" "}
        </Text>
        <Input
          placeholder="brand name"
          size="lg"
          type="date"
          variant="filled"
        />
      </FormControl>
      <FormControl>
        <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
          <FormLabel>SEARCH BY</FormLabel>{" "}
        </Text>
        <Input
          value={searchTerm}
          onChange={handleChange}
          placeholder="id/name/email"
          size="lg"
          variant="filled"
        />
      </FormControl>
    </Flex>
  );
}

export default Filter;

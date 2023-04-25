import {
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { inputStyles } from "theme/components/input";

function Filter({
  searchTerm,
  handleChange,
  categories,
  handleCategorySearch,
}) {
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
          <FormLabel>CATEGORY BY</FormLabel>
        </Text>
        <Select
          // placeholder="All"
          size="lg"
          variant="filled"
          onChange={handleCategorySearch}
        >
          <option value={""}>All</option>
          {categories.map((item, idx) => (
            <option value={`${item.name}`} key={`category_${item.name}`}>
              {item.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
          <FormLabel>BRAND BY</FormLabel>{" "}
        </Text>
        <Select placeholder="All" size="lg" variant="filled">
          <option>brand name</option>
        </Select>
      </FormControl>
      <FormControl>
        <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
          <FormLabel>SEARCH BY</FormLabel>{" "}
        </Text>
        <Input
          value={searchTerm}
          onChange={handleChange}
          placeholder="id/ name /category"
          size="lg"
          variant="filled"
        />
      </FormControl>
    </Flex>
  );
}

export default Filter;

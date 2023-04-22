import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { MdCategory } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";
import { BsFillBagFill } from "react-icons/bs";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { productscolumnsDataCheck } from "../dataTables/variables/columnsData";

import tableDataCheck from "../dataTables/variables/tableDataCheck.json";

import Filter from "./components/Filter";
import { AddButtom } from "components/actions";
import ProductTable from "./components/ProductTable";
const ProductList = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={BsFillBagFill} color={brandColor} />
              }
            />
          }
          name="Total Products"
          value="540"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdCategory} color={brandColor} />
              }
            />
          }
          name="Total Categories"
          value="350"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={HiShieldCheck} color={brandColor} />
              }
            />
          }
          name="Total Brands"
          value="200"
        />
      </SimpleGrid>
      <Box pt={{ base: "20px", md: "20px", xl: "20px" }}>
        {/* Main Fields */}
        <SimpleGrid columns={{ base: 1, md: 1 }} bg="white" gap="20px">
          <Flex px="25px" justify="space-between" my="20px" align="center">
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              Products List
            </Text>
            <AddButtom />
          </Flex>
          <Filter />

          <ProductTable
            columnsData={productscolumnsDataCheck}
            tableData={tableDataCheck}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductList;

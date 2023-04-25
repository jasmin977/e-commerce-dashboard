import { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { MdCategory } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";
import { BsFillBagFill } from "react-icons/bs";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { productscolumnsDataCheck } from "../dataTables/variables/columnsData";

import Filter from "./components/Filter";
import { AddButtom } from "components/actions";
import ProductTable from "./components/ProductTable";
import productApi from "api/productApi";
const ProductList = () => {
  //state and api calls
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  useEffect(async () => {
    setIsLoading(true);
    const [{ data }, err] = await productApi.getProducts();

    const [{ data: cats }, errc] = await productApi.getCategories();
    setCategories(cats);
    setSearchResults(data);
    setProducts(data);

    setIsLoading(false);
  }, []);

  //filter feature
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategoryTerm, setSearchCategoryTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCategorySearch = (event) => {
    setSearchCategoryTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(products);
    } else {
      const results = products.filter(
        (item) =>
          item.id.toString().includes(searchTerm) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchCategoryTerm === "") {
      setSearchResults(products);
    } else {
      const results = searchResults.filter((item) =>
        item.category.name
          .toLowerCase()
          .includes(searchCategoryTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchCategoryTerm]);

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  //spinner
  if (isLoading) {
    return (
      <Flex height={"xl"} align={"center"} justify={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.500"
          size="xl"
        />
      </Flex>
    );
  }
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
          value={products.length}
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
          value={categories.length}
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
          <Filter
            handleCategorySearch={handleCategorySearch}
            categories={categories}
            handleChange={handleChange}
            searchTerm={searchTerm}
          />

          <ProductTable
            columnsData={productscolumnsDataCheck}
            tableData={searchResults}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductList;

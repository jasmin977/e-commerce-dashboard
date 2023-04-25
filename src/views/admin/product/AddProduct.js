import {
  Box,
  Grid,
  Button,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Spinner,
} from "@chakra-ui/react";

import { MdOutlineMoreHoriz } from "react-icons/md";
import { useEffect, useState } from "react";
import { GoBackButton } from "components/actions";
import productApi from "api/productApi";

const Menu = () => {
  return (
    <Box
      align="center"
      justifyContent="center"
      _hover={{ cursor: "pointer" }}
      w="37px"
      h="37px"
      lineHeight="100%"
      borderRadius="10px"
    >
      <Icon as={MdOutlineMoreHoriz} color={"gray"} w="24px" h="24px" />
    </Box>
  );
};

const AddProduct = () => {
  //state
  const [categoryName, setCategoryName] = useState("");
  //fetch data
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [choisenCategory, setChosenCategory] = useState("");

  useEffect(async () => {
    setIsLoading(true);
    const [{ data: cats }, err] = await productApi.getCategories();
    setCategories(cats);
    setIsLoading(false);
  }, []);

  const onAddCategoryPressed = async () => {
    if (categoryName !== "") {
      const [{ data, status }, err] = await productApi.addCategory(
        categoryName,
        "desc"
      );
      if (err) return console.log(err);
      console.log(data);
      if (status == 200) {
        setCategoryName("");
        setCategories((v) => [...v, data]);
      } else {
        console.log(data.error);
      }
    }
  };

  const handleCategoryChoise = (event) => {
    setChosenCategory(event.target.value);
  };

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action with the uploaded image
  };

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
    <Box pt={{ base: "80px", md: "50px", xl: "50px" }}>
      <GoBackButton />
      {/* Main Fields */}
      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: "20px", xl: "20px" }}>
        <Stack direction="row" spacing="4">
          <Box flex="1">
            <Box bg={"white"} borderWidth="1px" borderRadius="lg" p="4" mb="4">
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">
                  Basic information
                </Text>
                <Menu />
              </Stack>
              <Stack direction="column" spacing="4">
                <Box>
                  <Text mb="2" fontWeight="bold">
                    Title
                  </Text>
                  <Input
                    placeholder="Type here..."
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                  />
                </Box>
                <Box>
                  <Text mb="2" fontWeight="bold">
                    Description
                  </Text>
                  <Textarea
                    placeholder="Type here..."
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                  />
                </Box>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Category
                    </Text>
                    <Select
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                      onChange={handleCategoryChoise}
                    >
                      {categories.map((item, idx) => (
                        <option
                          value={`${item.name}`}
                          key={`chosen_category_${item.name}`}
                        >
                          {item.name}
                        </option>
                      ))}
                    </Select>
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Brand
                    </Text>
                    <Select
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                    >
                      <option value="richman">richman</option>
                      <option value="lubana">lubana</option>
                      <option value="ecstasy">ecstasy</option>
                    </Select>
                  </Box>
                </Stack>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Regular price
                    </Text>
                    <Input
                      placeholder="Type here..."
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                    />
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Discount price
                    </Text>
                    <Input
                      placeholder="Type here..."
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                    />
                  </Box>
                </Stack>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Shipping fee
                    </Text>
                    <Input
                      placeholder="Type here..."
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                    />
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      Tax rate
                    </Text>
                    <Input
                      placeholder="Type here..."
                      size="lg"
                      borderWidth={2}
                      borderColor={borderColor}
                      variant="filled"
                    />
                  </Box>
                </Stack>
                <Box>
                  <Text mb="2" fontWeight="bold">
                    Tags
                  </Text>
                  <Textarea
                    placeholder="Type here..."
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Flex direction="column" w="100%">
          {/** organisation */}
          <Box mb="4" bg={"white"} borderWidth="1px" borderRadius="lg" p="4">
            <Flex direction="row" align="center" justify="space-between" mb={4}>
              <Box as="h4" fontWeight="bold" fontSize="lg">
                Organization
              </Box>
              <Menu />
            </Flex>
            <Flex direction="column">
              <Flex direction="row" align={"flex-end"} mb={4}>
                <FormControl id="add-category">
                  <FormLabel>Add Category</FormLabel>
                  <Input
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                    type="text"
                    placeholder="Type here..."
                  />
                </FormControl>
                <Button
                  variant="darkBrand"
                  color="white"
                  fontSize="lg"
                  fontWeight="500"
                  borderRadius="10px"
                  px="24px"
                  height={"50px"}
                  py="20px"
                  mx={"10px"}
                  onClick={onAddCategoryPressed}
                >
                  Add
                </Button>
              </Flex>
              {/** */}
              <Flex direction="row" align={"flex-end"} mb={4}>
                <FormControl id="add-brand">
                  <FormLabel>Add Brand</FormLabel>
                  <Input
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                    type="text"
                    placeholder="Type here..."
                  />
                </FormControl>
                <Button
                  variant="darkBrand"
                  color="white"
                  fontSize="lg"
                  fontWeight="500"
                  borderRadius="10px"
                  px="24px"
                  height={"50px"}
                  py="20px"
                  mx={"10px"}
                >
                  Add
                </Button>
              </Flex>
            </Flex>
          </Box>
          {/** specification */}
          <Box bg={"white"} borderWidth="1px" borderRadius="lg" p="4" mb="4">
            <Flex align="center" justify="space-between" mb={4}>
              <Box as="h4" fontWeight="bold" fontSize="lg">
                Specification
              </Box>
              <Menu />
            </Flex>
            <Flex direction="column">
              <Flex direction={{ base: "column", xl: "row" }} gap={4} mb={4}>
                <Box flex={"1"}>
                  <Text mb="2" fontWeight="bold">
                    Weight
                  </Text>
                  <Input
                    placeholder="Type here..."
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                  />
                </Box>
                <Box flex={"1"}>
                  <Text mb="2" fontWeight="bold">
                    Stock
                  </Text>
                  <Input
                    placeholder="Type here..."
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
          {/** specification */}
          <Box bg={"white"} borderWidth="1px" borderRadius="lg" p="4" mb="4">
            <Flex align="center" justify="space-between">
              <Box as="h4" fontWeight="bold" fontSize="lg">
                Media
              </Box>
              <Menu />
            </Flex>
            <Flex>
              <Box p="4">
                <Box flex="1">
                  <Text mb="2" fontWeight="bold">
                    Upload Product Image
                  </Text>
                  <Input
                    size="lg"
                    borderWidth={2}
                    borderColor={borderColor}
                    variant="filled"
                    type="file"
                    onChange={handleImageChange}
                  />
                </Box>

                {image && (
                  <Box mt="4">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded Image"
                    />
                  </Box>
                )}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Grid>

      <Flex w="100%">
        <Button
          w={"100%"}
          variant="darkBrand"
          color="white"
          fontSize="lg"
          my="20px"
          fontWeight="500"
          borderRadius="10px"
        >
          Publish now
        </Button>
      </Flex>
    </Box>
  );
};

export default AddProduct;

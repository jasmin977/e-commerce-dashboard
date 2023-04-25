import {
  Box,
  Grid,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { MdCheck, MdBlock, MdMoreHoriz, MdLocalShipping } from "react-icons/md";

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { clientscolumnsDataCheck } from "../dataTables/variables/columnsData";

import { useEffect, useState } from "react";
import Filter from "./components/Filter";

import ClientsTable from "./components/ClientsTable";
import clientApi from "api/clientApi";
const ClientList = () => {
  //state and api calls
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  useEffect(async () => {
    setIsLoading(true);
    const [{ data }, err] = await clientApi.getUsers();
    setSearchResults(data.users);
    setUsers(data.users);
    setIsLoading(false);
  }, []);

  //filter feature
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(users);
    } else {
      const results = users.filter(
        (item) =>
          item.id.toString().includes(searchTerm) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.phoneNumber.includes(searchTerm)
      );
      setSearchResults(results);
    }
  }, [searchTerm]);

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdMoreHoriz} color={brandColor} />
              }
            />
          }
          name="Pending Users"
          value="10"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdCheck} color={brandColor} />}
            />
          }
          name="Approved Users"
          value="32"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdBlock} color={brandColor} />}
            />
          }
          name="Blocked Users"
          value="3"
        />
      </Grid>
      <Box pt={{ base: "20px", md: "20px", xl: "20px" }}>
        {/* Main Fields */}
        <SimpleGrid
          columns={{ base: 1, md: 1 }}
          bg={"white"}
          gap="20px"
          rounded={"lg"}
        >
          <Flex px="25px" justify="space-between" my="20px" align="center">
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              Registered Users
            </Text>

            <Button
              ms="auto"
              align="center"
              justifyContent="center"
              bg={bgButton}
              _hover={bgHover}
              _focus={bgFocus}
              _active={bgFocus}
              w="37px"
              h="37px"
              lineHeight="100%"
              borderRadius="10px"
            >
              <Icon as={MdMoreHoriz} color={iconColor} w="24px" h="24px" />
            </Button>
          </Flex>
          <Filter handleChange={handleChange} searchTerm={searchTerm} />

          <ClientsTable
            columnsData={clientscolumnsDataCheck}
            //   tableData={users}
            tableData={searchResults}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ClientList;

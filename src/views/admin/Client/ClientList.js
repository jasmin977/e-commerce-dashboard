import {
  Box,
  Grid,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { MdCheck, MdBlock, MdMoreHoriz, MdLocalShipping } from "react-icons/md";

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { clientscolumnsDataCheck } from "../dataTables/variables/columnsData";

import clientsData from "../dataTables/variables/clientsData.json";
import Filter from "./components/Filter";

import ClientsTable from "./components/ClientsTable";
const ClientList = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
          </Flex>
          <Filter />

          <ClientsTable
            columnsData={clientscolumnsDataCheck}
            tableData={clientsData}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ClientList;
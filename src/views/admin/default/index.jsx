// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdBarChart,
  MdMoreHoriz,
  MdShoppingBag,
  MdShoppingCart,
} from "react-icons/md";

import PieCard from "views/admin/default/components/PieCard";

import TotalSpent from "views/admin/default/components/TotalSpent";

import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import {
  clientscolumnsDataCheck,
  productscolumnsDataCheck,
} from "../dataTables/variables/columnsData";
import ProductTable from "../product/components/ProductTable";
import Filter from "../product/components/Filter";
import { HiUsers } from "react-icons/hi";
import { ImStarFull } from "react-icons/im";
import clientsData from "../dataTables/variables/clientsData.json";
import ClientsTable from "../Client/components/ClientsTable";

export default function UserReports() {
  // Chakra Color Mode
  // Chakra Color Mode
  const iconColor = useColorModeValue("brand.500", "white");

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgFocus = useColorModeValue({ bg: "secondaryGray.800" });
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateRows={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={2}>
          <MiniStatistics
            growth="+95%"
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={HiUsers} color={brandColor} />
                }
              />
            }
            name="Total Users"
            value="350"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            lose="-20%"
            colSpan={2}
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={MdShoppingCart}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Orders"
            value="350"
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <MiniStatistics growth="+23%" name="Total Sales" value="$574.34" />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            colSpan={2}
            lose="-25%"
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={MdShoppingBag}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Products"
            value="350"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            colSpan={2}
            growth="+45%"
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={ImStarFull} color={brandColor} />
                }
              />
            }
            name="Total Reviews"
            value="350"
          />
        </GridItem>
      </Grid>
      {/** sats */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap="20px"
        my="20px"
      >
        <GridItem colSpan={2}>
          {/*   <TotalSpent /> */}
          {/** best clients */}
          <Box
            pt={{ base: "20px", md: "20px", xl: "20px" }}
            bg="white"
            rounded={"2xl"}
          >
            <Flex px="25px" justify="space-between" my="20px" align="center">
              <Text
                color={textColor}
                fontSize="22px"
                fontWeight="700"
                lineHeight="100%"
              >
                Popular Clients
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

            <ClientsTable
              columnsData={clientscolumnsDataCheck}
              tableData={clientsData}
            />
          </Box>
        </GridItem>

        <GridItem>
          <PieCard />
        </GridItem>
      </Grid>

      {/** best selling products */}
      <Box
        pt={{ base: "20px", md: "20px", xl: "20px" }}
        bg="white"
        rounded={"2xl"}
      >
        {/* Main Fields */}
        <SimpleGrid columns={{ base: 1, md: 1 }}>
          <Flex px="25px" justify="space-between" my="10px" align="center">
            <Text
              color={textColor}
              fontSize="22px"
              fontWeight="700"
              lineHeight="100%"
            >
              Best Selling Products
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

          <ProductTable
            columnsData={productscolumnsDataCheck}
            tableData={tableDataCheck}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

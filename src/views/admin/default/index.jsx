// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import { productscolumnsDataCheck } from "../dataTables/variables/columnsData";
import ProductTable from "../product/components/ProductTable";
import Filter from "../product/components/Filter";

export default function UserReports() {
  // Chakra Color Mode
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

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
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Total Users"
            value="350"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            colSpan={2}
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Total Users"
            value="350"
          />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
          <MiniStatistics growth="+23%" name="Total Sales" value="$574.34" />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            colSpan={2}
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Total Users"
            value="350"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MiniStatistics
            colSpan={2}
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
                }
              />
            }
            name="Total Users"
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
          <TotalSpent />
        </GridItem>
        <GridItem>
          <PieCard />
        </GridItem>
      </Grid>

      {/** best selling products */}
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
              Best Selling Products
            </Text>
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
}

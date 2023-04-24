import {
  Box,
  Grid,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdLocalShipping,
  MdMoreHoriz,
} from "react-icons/md";
import { IoIosMore, IoIosRemoveCircleOutline } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";

import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { orderscolumnsDataCheck } from "../dataTables/variables/columnsData";

import odersData from "../dataTables/variables/ordersData.json";
import Filter from "./components/Filter";
import OderTable from "./components/OrderTable";
import { useEffect, useState } from "react";
import { orderApi } from "api";
const OrderList = () => {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [orders, setOrders] = useState();

  useEffect(async () => {
    const [data, err] = await orderApi.getOrders();

    console.log(data);
    setOrders(orders);
  }, []);

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

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
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
                <Icon w="32px" h="32px" as={IoIosMore} color={brandColor} />
              }
            />
          }
          name="Pending Orders"
          value="540"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdLocalShipping}
                  color={brandColor}
                />
              }
            />
          }
          name="Shipped Orders"
          value="350"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={BsBagCheckFill}
                  color={brandColor}
                />
              }
            />
          }
          name="Recieved Orders"
          value="200"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="40px" h="40px" as={TiCancel} color={brandColor} />}
            />
          }
          name="Cancelled Orders"
          value="200"
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
              Orders List
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
          <Filter />

          <OderTable
            columnsData={orderscolumnsDataCheck}
            tableData={odersData}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OrderList;

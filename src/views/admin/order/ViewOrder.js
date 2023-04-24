import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Thead,
  Tr,
  Td,
  Tbody,
  Table,
  Text,
  Tfoot,
  Th,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";
import { GoBackButton } from "components/actions";

import {
  BsFillCartFill,
  BsFileArrowDownFill,
  BsFillPrinterFill,
} from "react-icons/bs";

function OrderView() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgFocus = useColorModeValue({ bg: "secondaryGray.800" });
  return (
    <Box
      flex="1"
      direction={"column"}
      pt={{ base: "30px", md: "20px" }}
      mt="30px"
    >
      <GoBackButton />
      <Flex
        flex="1"
        direction={"column"}
        p={10}
        borderRadius="lg"
        mb="4"
        gap={10}
        bg={"white"}
      >
        <Flex flex="1" direction={"column"} align={"center"} gap={3}>
          <Icon as={BsFillCartFill} color={brandColor} w={10} h={10} />
          <Text fontSize="3xl" fontWeight="bold">
            Order #8456
          </Text>
        </Flex>

        <Flex
          flex="1"
          direction={"row"}
          align={"center"}
          justify={"space-between"}
        >
          {/** Order Recieved */}
          <Flex direction={"column"}>
            <Text fontSize="md" fontWeight="bold">
              Order Recieved
            </Text>
            <Text fontSize="md" fontWeight="normal">
              Office 25/B, Road 30, West jalkuri,
            </Text>
            <Text fontSize="md" fontWeight="normal">
              Fatullah, Narayanganj 1265.
            </Text>
            <Text fontSize="md" fontWeight="normal">
              +8801838288389.
            </Text>
            <Text fontSize="md" fontWeight="normal">
              support@miron.com{" "}
            </Text>
          </Flex>

          {/** Shipment Details
           */}
          <Flex direction={"column"}>
            <Text fontSize="md" fontWeight="bold">
              Shipment Details
            </Text>
            <Text fontSize="md" fontWeight="normal">
              House 17/A, Road 09, West jalkuri,
            </Text>
            <Text fontSize="md" fontWeight="normal">
              Fatullah, Narayanganj 1265.
            </Text>
            <Text fontSize="md" fontWeight="normal">
              +8801838288389.
            </Text>
            <Text fontSize="md" fontWeight="normal">
              support@miron.com{" "}
            </Text>
          </Flex>
        </Flex>

        {/** order table details */}
        <Flex flex="1">
          <Table
            variant="simple"
            borderWidth={2}
            size="lg"
            colorScheme="blackAlpha"
          >
            <Thead>
              <Tr>
                <Th>UID</Th>
                <Th>PRODUCT</Th>
                <Th>PRICE</Th>
                <Th>DISCOUNT</Th>
                <Th>QUANTITY</Th>
                <Th>AMOUNT</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>#5768</Td>
                <Td>modern summer sho</Td>
                <Td>25 DT</Td>
                <Td>20 %</Td>
                <Td>03</Td>
                <Td>10 DT</Td>
              </Tr>
              <Tr>
                <Td>#5768</Td>
                <Td>modern summer sho</Td>
                <Td>25 DT</Td>
                <Td>20 %</Td>
                <Td>03</Td>
                <Td>10 DT</Td>
              </Tr>
              <Tr>
                <Td>#5768</Td>
                <Td>modern summer sho</Td>
                <Td>25 DT</Td>
                <Td>20 %</Td>
                <Td>03</Td>
                <Td>10 DT</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>

        {/** total display */}

        <Flex>
          <Flex direction={"column"} marginLeft={"auto"} gap={4}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <Text fontSize="lg" fontWeight="normal">
                Subtotal
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                :
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                200.000 DT
              </Text>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <Text fontSize="lg" fontWeight="normal">
                Discount
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                :
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                50 DT
              </Text>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <Text fontSize="lg" fontWeight="normal">
                Shipping
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                :
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                7 DT
              </Text>
            </Grid>
            <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              <Text fontSize="lg" fontWeight="normal">
                Total
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                :
              </Text>
              <Text fontSize="larger" fontWeight="bold">
                2.500.00 DT
              </Text>
            </Grid>
          </Flex>
        </Flex>

        {/** footer */}
        <Flex flex="1" direction={"column"} gap={5}>
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
          <Text>
            We appreciate your business and hope that you are satisfied with
            your purchase. {"\n"}
            If you are not completely satisfied with your order, please do not
            hesitate to contact us via phone or email. We are committed to
            resolving any issues you may have.{"\n"}
            Thank you again for choosing our app. We look forward to serving you
            in the future.{"\n"}
          </Text>
          <Text> Best regards,</Text>
          <Text fontWeight={"bold"}> BIBO SOLUTIONS</Text>
        </Flex>
        <Flex flex="1" direction={"column"} align={"center"} gap={5}>
          <Flex direction={"row"} gap={5}>
            <Stack spacing={4}>
              <Button
                py={7}
                bg={textColor}
                _hover={bgFocus}
                leftIcon={
                  <Icon as={BsFillPrinterFill} color={boxBg} w={5} h={5} />
                }
                variant="brand"
              >
                PRINT THIS RECIPT
              </Button>
            </Stack>
            <Stack spacing={4}>
              <Button
                py={7}
                leftIcon={
                  <Icon as={BsFileArrowDownFill} color={boxBg} w={5} h={5} />
                }
                variant="brand"
              >
                DOWNLOAD AS PDF
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default OrderView;

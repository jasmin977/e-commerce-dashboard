import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Button,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  SimpleGrid,
  useColorModeValue,
  Icon,
  Flex,
  FormLabel,
  Avatar,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import Upload from "../profile/components/Upload";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import CheckTable from "../dataTables/components/CheckTable";
import {
  columnsDataCheck,
  productscolumnsDataCheck,
} from "../dataTables/variables/columnsData";

import tableDataCheck from "../dataTables/variables/tableDataCheck.json";
const ProductList = () => {
  // Chakra Color Mode
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
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
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
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
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
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Total Brands"
          value="200"
        />
      </SimpleGrid>
      <Box pt={{ base: "20px", md: "20px", xl: "20px" }}>
        {/* Main Fields */}
        <SimpleGrid columns={{ base: 1, md: 1 }} gap="20px">
          <CheckTable
            columnsData={productscolumnsDataCheck}
            tableData={tableDataCheck}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductList;

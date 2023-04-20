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
} from "@chakra-ui/react";
import Upload from "../profile/components/Upload";

const Product = () => {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        {/*   <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <Text fontWeight="bold">product</Text>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <Text fontWeight="bold">upload</Text>
        </BreadcrumbItem>
      </Breadcrumb> */}
        <Stack direction="row" spacing="4">
          <Box flex="1">
            <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">
                  basic information
                </Text>
                <Button variant="primary" size="sm">
                  <i className="material-icons">more_horiz</i>
                </Button>
              </Stack>
              <Stack direction="column" spacing="4">
                <Box>
                  <Text mb="2" fontWeight="bold">
                    title
                  </Text>
                  <Input placeholder="Type here..." size="md" />
                </Box>
                <Box>
                  <Text mb="2" fontWeight="bold">
                    description
                  </Text>
                  <Textarea placeholder="Type here..." size="md" />
                </Box>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      category
                    </Text>
                    <Select size="md">
                      <option value="mans">mans</option>
                      <option value="womans">womans</option>
                      <option value="accessory">accessory</option>
                    </Select>
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      brand
                    </Text>
                    <Select size="md">
                      <option value="richman">richman</option>
                      <option value="lubana">lubana</option>
                      <option value="ecstasy">ecstasy</option>
                    </Select>
                  </Box>
                </Stack>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      regular price
                    </Text>
                    <Input placeholder="Type here..." size="md" />
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      discount price
                    </Text>
                    <Input placeholder="Type here..." size="md" />
                  </Box>
                </Stack>
                <Stack direction="row" spacing="4">
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      shipping fee
                    </Text>
                    <Input placeholder="Type here..." size="md" />
                  </Box>
                  <Box flex="1">
                    <Text mb="2" fontWeight="bold">
                      tax rate
                    </Text>
                    <Input placeholder="Type here..." size="md" />
                  </Box>
                </Stack>
                <Box>
                  <Text mb="2" fontWeight="bold">
                    tags
                  </Text>
                  <Textarea placeholder="Type here..." size="md" />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe="20px"
          pb={{ base: "100px", lg: "20px" }}
        />
      </Grid>
      <Grid></Grid>
    </Box>
  );
};

export default Product;

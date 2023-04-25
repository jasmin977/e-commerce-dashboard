import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle, FaShoppingCart, FaStore, FaTag } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { GoBackButton } from "components/actions";
import { useLocation } from "react-router-dom";

import image from "assets/img/nfts/Nft4.png";
function ProductView() {
  const location = useLocation();
  const productData = location.state;

  //spinner
  if (!productData) {
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
    <Box
      flex="1"
      direction={"column"}
      pt={{ base: "30px", md: "20px" }}
      mt="30px"
    >
      <GoBackButton />
      <Box
        flex="1"
        direction={"column"}
        p={10}
        bg={"white"}
        borderRadius="lg"
        my={4}
      >
        <Grid
          gap={{ base: "20px", xl: "20px" }}
          templateColumns="repeat(12, 1fr)"
        >
          <GridItem colSpan={5}>
            <Stack direction="row" h="100px" p={4} align={"center"}>
              <Text w={"100%"} fontSize="xl" fontWeight="bold">
                Product Image
              </Text>
              <Divider orientation="horizontal" />
            </Stack>

            <Box
              boxShadow="xl"
              border="3px dashed"
              borderColor="gray.200"
              borderRadius={"8px"}
            >
              <Image
                borderRadius="8px"
                boxSize="400px"
                src={image}
                alt="product image"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={7}>
            <Stack direction="row" h="100px" p={4} align={"center"}>
              <Text w={"100%"} fontSize="xl" fontWeight="bold">
                Product Details
              </Text>
              <Divider orientation="horizontal" />
            </Stack>
            <Box>
              <Text fontSize="3xl" fontWeight="medium">
                {productData.name}
              </Text>
              <Flex direction={"column"} gap={5} p={5}>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={FaStore} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Brand
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p"></Text>
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={MdCategory} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Category
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p">{productData.category.name}</Text>
                </Grid>

                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={AiFillSetting} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Tags
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p">...........</Text>
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={FaTag} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Price
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p">{productData.price}</Text>
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={FaShoppingCart} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Stock
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p">...........</Text>
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)">
                  <Flex align={"center"}>
                    <Icon as={FaCheckCircle} mr={2} />
                    <Text as="h5" fontWeight="semibold" mr={2}>
                      Published
                    </Text>
                  </Flex>

                  <Text as="span" mr={2}>
                    :
                  </Text>
                  <Text as="p">..........</Text>
                </Grid>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Flex flex="1" direction={"column"}>
          <Stack direction="row" h="100px" p={4} align={"center"}>
            <Text w={"100%"} fontSize="xl" fontWeight="bold">
              Product Description
            </Text>
            <Divider orientation="horizontal" />
          </Stack>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit repellendus expedita esse cupiditate quos doloremque
            rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
            voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
            debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
            officiis quidem quo deleniti, autem non laudantium sequi error
            molestiae ducimus accusamus facere velit consectetur vero dolore
            natus nihil temporibus aspernatur quia consequatur? Consequuntur
            voluptate deserunt repellat tenetur debitis molestiae doloribus
            dicta. In rem illum dolorem atque ratione voluptates asperiores
            maxime doloremque laudantium magni neque ad quae quos quidem,
            quaerat rerum ducimus blanditiis reiciendis
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductView;

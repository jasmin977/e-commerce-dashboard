import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Icon,
  Flex,
  Select,
  Avatar,
} from "@chakra-ui/react";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
function UpdateModal({ color, clientCell, acionText }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        align="center"
        justifyContent="center"
        bg={`${color}.100`}
        w="37px"
        h="37px"
        borderRadius="10px"
        onClick={onOpen}
      >
        <Icon as={MdEdit} color={color} w="18px" h="18px" />
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent alignItems={"center"}>
          <ModalHeader>
            <Flex direction={"column"} alignItems={"center"} mt={-50}>
              <Flex
                flex={"1"}
                p={3}
                rounded={"full"}
                bg={"white"}
                align={"center"}
              >
                <Avatar
                  src={
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
                  w="100px"
                  h="100px"
                  // me="10px"
                />
              </Flex>

              <Text fontWeight={"extrabold"} fontSize={25} color="gray.900">
                {clientCell.name}
              </Text>
              <Text fontWeight={"normal"} fontSize={20} color="gray.600">
                {clientCell.email}
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              p={5}
              flex={"1"}
              justify={"space-between"}
              align={"center"}
              gap={15}
            >
              <Text fontSize={20} fontWeight={"bold"}>
                STATUS
              </Text>
              <Select size="lg" variant="filled" value={clientCell.status}>
                <option>Approved</option>
                <option>Pending</option>
                <option>Blocked</option>
              </Select>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              CLOSE POP UP
            </Button>
            <Button colorScheme="green">SAVE CHANGES</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateModal;

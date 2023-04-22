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
} from "@chakra-ui/react";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { MdDelete, MdBlock } from "react-icons/md";
function DeleteModal({ color, text, acionText }) {
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
        {(() => {
          switch (acionText) {
            case "BLOCK":
              return <Icon as={MdBlock} color={color} w="18px" h="18px" />;
            case "DELETE":
              return <Icon as={MdDelete} color={color} w="18px" h="18px" />;
            default:
              return null;
          }
        })()}
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
            <Flex direction={"column"} alignItems={"center"}>
              <Icon
                as={BsExclamationOctagonFill}
                width="50px"
                height="50px"
                color="red.500"
              />
              <Text fontWeight={"extrabold"} fontSize={25} color="gray.900">
                Are you sure!
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={"normal"} fontSize={20} color="gray.600">
              {text}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              NOP, CANCEL
            </Button>
            <Button colorScheme="red">YES,{acionText}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal;

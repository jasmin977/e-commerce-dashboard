import { Button, Icon, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
export default function GoBackButton() {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Stack spacing={4}>
      <Button
        marginRight={"auto"}
        onClick={handleGoBack}
        p5={7}
        leftIcon={<Icon as={BiArrowBack} color={textColor} w={5} h={5} />}
        variant="transparent"
      >
        Go back
      </Button>
    </Stack>
  );
}

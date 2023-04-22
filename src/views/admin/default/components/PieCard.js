// Chakra imports
import {
  Box,
  Flex,
  Text,
  Select,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import React from "react";
import {
  MdAdd,
  MdPriorityHigh,
  MdMoreHoriz,
  MdCheck,
  MdClose,
} from "react-icons/md";
export default function Conversion(props) {
  const { ...rest } = props;

  const PieCardItem = ({ color, title, num }) => {
    let icon;
    switch (title) {
      case "Shipped":
        icon = <Icon w="18px" h="18px" as={MdAdd} color={"white"} />;
        break;
      case "Pending":
        icon = <Icon w="18px" h="18px" as={MdMoreHoriz} color={"white"} />;
        break;
      case "Cancelled":
        icon = <Icon w="18px" h="18px" as={MdClose} color={"white"} />;
        break;
      case "Recieved":
        icon = <Icon w="18px" h="18px" as={MdCheck} color={"white"} />;
        break;
      case "Refunded":
        icon = <Icon w="18px" h="18px" as={MdPriorityHigh} color={"white"} />;
        break;

      default:
        break;
    }
    return (
      <Flex flex="1" direction={"row"} justify={"space-between"}>
        <Flex align="center" gap={2}>
          <Flex
            align={"center"}
            justify={"center"}
            h="20px"
            w="20px"
            bg={`${color}.400`}
            borderRadius="50%"
            p={3}
          >
            {icon}
          </Flex>
          <Text fontSize="lg" fontWeight="700" color="secondaryGray.800">
            {title}
          </Text>
        </Flex>
        <Text fontSize="lg" color={textColor} fontWeight="700">
          {num}
        </Text>
      </Flex>
    );
  };

  const pieChartOptions = {
    labels: ["Pending", "Shipped", "Recieved", "Cancelled", "Refunded"],
    colors: ["#9F7AEA", "#4299E1", "#48BB78", "#F56565", "#ECC94B"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#9F7AEA", "#4299E1", "#48BB78", "#F56565", "#ECC94B"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const pieChartData = [10, 20, 20, 20, 20];

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Orders Overview
        </Text>
        <Text>...</Text>
      </Flex>

      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      <Card
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
      >
        <Flex direction="column" py="5px" flex={"1"} gap={3}>
          {/**pending */}

          <PieCardItem color={"purple"} title={"Pending"} num={200} />
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
          <PieCardItem color={"blue"} title={"Shipped"} num={150} />
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
          <PieCardItem color={"green"} title={"Recieved"} num={20} />
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
          <PieCardItem color={"red"} title={"Cancelled"} num={80} />
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)"></Flex>
          <PieCardItem color={"yellow"} title={"Refunded"} num={70} />
        </Flex>
      </Card>
    </Card>
  );
}

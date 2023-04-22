import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

//custom icons
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

// Custom components
import Card from "components/card/Card";

import { DeleteModal } from "components/actions";
import { ActionButtom } from "components/actions";

export default function OderTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const tableColor = useColorModeValue("secondaryGray.900", "whiteGray");

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Table
        {...getTableProps()}
        variant="striped"
        colorScheme="gray"
        color="gray.500"
        mb="24px"
      >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "UID") {
                    data = (
                      <Flex align="center">
                        <Checkbox
                          //defaultChecked={cell.value[1]}
                          colorScheme="brandScheme"
                          me="10px"
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          #{cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "CLIENT") {
                    data = (
                      <Flex align="center">
                        <Avatar
                          src={cell.value[1]}
                          w="30px"
                          h="30px"
                          me="8px"
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="600">
                          {cell.value} {/**{cell.value[0]}*/}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "PRODUCT") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        ({cell.value}) item
                      </Text>
                    );
                  } else if (cell.column.Header === "AMOUNT") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value} DT
                      </Text>
                    );
                  } else if (cell.column.Header === "PAYMENT") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "STATUS") {
                    let statusColor;
                    let bgStatusColor;
                    switch (cell.value) {
                      case "pending":
                        statusColor = "rgb(165, 55, 253)";
                        bgStatusColor = "rgba(165, 55, 253,0.2)";
                        break;
                      case "shipped":
                        statusColor = "rgb(45, 85, 255)";
                        bgStatusColor = "rgba(45, 85, 255, 0.2)";
                        break;
                      case "cancelled":
                        statusColor = "rgb(255, 99, 71)";
                        bgStatusColor = "rgba(255, 99, 71,0.2)";
                        break;
                      case "recieved":
                        statusColor = "rgb(60, 179, 113)";
                        bgStatusColor = "rgba(60, 179, 113, 0.2)";
                        break;

                      default:
                        break;
                    }
                    data = (
                      <Flex
                        bg={bgStatusColor}
                        p={2}
                        rounded={"full"}
                        align={"center"}
                        justify={"center"}
                      >
                        <Text
                          textTransform={"capitalize"}
                          color={statusColor}
                          fontSize="sm"
                          fontWeight="700"
                        >
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "DATE TIME") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "ACTION") {
                    let id = cell.row.values.uid;
                    data = (
                      <Flex gap={1}>
                        <ActionButtom
                          iconName={FaEye}
                          path={`orders/${id}`}
                          color={"purple"}
                        />
                        <ActionButtom iconName={FiDownload} color={"green"} />

                        <DeleteModal
                          color={"red"}
                          text="Want to delete this order"
                          acionText="DELETE"
                        />
                      </Flex>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}

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
  Icon,
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

// Custom components
import Card from "components/card/Card";

import { DeleteModal } from "components/actions";
import { ActionButtom } from "components/actions";
import { UpdateModel } from "components/actions";
import { ViewProfileModal } from "components/actions";

export default function ClientsTable(props) {
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
                  } else if (cell.column.Header === "NAME") {
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
                  } else if (cell.column.Header === "EMAIL") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.slice(0, 15)}...
                      </Text>
                    );
                  } else if (cell.column.Header === "PASSWORD") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.slice(0, 10)}...
                      </Text>
                    );
                  } else if (cell.column.Header === "PHONE") {
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

                      case "blocked":
                        statusColor = "rgb(255, 99, 71)";
                        bgStatusColor = "rgba(255, 99, 71,0.2)";
                        break;
                      case "approved":
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
                  } else if (cell.column.Header === "CREATED") {
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
                          path={`clients/${id}`}
                          iconName={FaEye}
                          color={"purple"}
                        />
                        {/* 
                        <ViewProfileModal
                          color={"purple"}
                          clientCell={cell.row.values}
                        /> */}
                        <UpdateModel
                          color={"green"}
                          clientCell={cell.row.values}
                        />

                        <DeleteModal
                          color={"red"}
                          text="Want to block this user's account"
                          acionText="BLOCK"
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

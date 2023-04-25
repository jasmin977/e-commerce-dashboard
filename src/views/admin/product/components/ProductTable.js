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
import { MdModeEdit, MdDelete } from "react-icons/md";

// Custom components
import Card from "components/card/Card";

import { ActionButtom } from "components/actions";
import { DeleteModal } from "components/actions";
import ProductItem from "views/admin/dataTables/components/ProductItem";

export default function ProductTable(props) {
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
                  } else if (cell.column.Header === "PRODUCT") {
                    data = <ProductItem name={cell.value} />;
                  } else if (cell.column.Header === "CATEGORY") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.name}
                      </Text>
                    );
                  } else if (cell.column.Header === "PRICE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}DT
                      </Text>
                    );
                  } else if (cell.column.Header === "STOCK") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "ACTION") {
                    let id = cell.row.values.id;
                    let product = cell.row.values;

                    data = (
                      <Flex gap={1}>
                        <ActionButtom
                          dataToSend={product}
                          iconName={FaEye}
                          path={`products/${id}`}
                          color={"purple"}
                        />
                        <ActionButtom iconName={MdModeEdit} color={"green"} />
                        <DeleteModal
                          color={"red"}
                          text="Want to delete this product"
                          acionText="DELETE"
                        />{" "}
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

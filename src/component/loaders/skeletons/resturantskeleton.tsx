import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import DataTable from "react-data-table-component";
import { Flex, useColorMode } from "@chakra-ui/react";

const ResturantSkeleton = () => {
  const { colorMode } = useColorMode();
  const columns: any = [
    {
      name: "Name",
      sortable: true,
      cell: (row: any) => <Skeleton width={150} height={30} />,
    },
    {
      name: "User",
      sortable: true,
      cell: (row: any) => <Skeleton height={30} width={150} />,
    },
    {
      name: "Verified",
      sortable: true,
      align: "center",
      cell: (row: any) => (
        <Flex
          flexDir={["column", "row"]}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Skeleton height={20} width={20} />
        </Flex>
      ),
    },
    {
      name: "Public",
      sortable: true,
      align: "center",
      cell: (row: any) => (
        <Flex
          flexDir={["column", "row"]}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Skeleton height={20} width={20} />
        </Flex>
      ),
    },
    {
      name: "Update",
      cell: (row: any) => <Skeleton height={30} width={150} />,
    },
    {
      name: "Action",
      cell: (row: any) => <Skeleton height={30} width={150} />,
    },
  ];
  return (
    <SkeletonTheme highlightColor="#D8D8D8">
      <DataTable
        columns={columns || []}
        data={[
          {
            name: "",
            contact: "",
          },
          {
            name: "",
            contact: "",
          },
          {
            name: "",
            contact: "",
          },
          {
            name: "",
            contact: "",
          },
          {
            name: "",
            contact: "",
          },
          {
            name: "",
            contact: "",
          },
        ]}
        striped
        fixedHeader
        persistTableHead
        pagination
        responsive
        theme={colorMode}
      />
    </SkeletonTheme>
  );
};

export default ResturantSkeleton;

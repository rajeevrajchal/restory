import { useEffect } from "react";
import {
  Checkbox,
  Stack,
  Button,
  Flex,
  Box,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { BsCaretDown } from "react-icons/bs";
import { useAppData } from "../../context/useAppData";
import ResturantSkeleton from "../../component/loaders/skeletons/resturantskeleton";
import { useNavigate } from "react-router";

const Restaurants = () => {
  const {
    resturantData: { loading, resturants, verifyResturant, getResturants },
  } = useAppData();
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const {
    activeRoute: { setActiveRoute },
  } = useAppData();

  const columns: any = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      allowOverflow: true,
      grow: 2,
    },
    {
      name: "User",
      selector: "contact",
      sortable: true,
      grow: 2,
    },
    {
      name: "Description",
      sortable: true,
      allowOverflow: true,
      grow: 3,
      cell: (row: any) => <p>{row.description}</p>,
    },
    {
      name: "Verified",
      sortable: true,
      align: "center",
      cell: (row: any) => (
        <Tooltip
          label={row.verified ? "Resturant Verified" : "Resturant UnVerified"}
          hasArrow
          closeOnMouseDown={true}
        >
          <Flex
            flexDir={["column", "row"]}
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Checkbox isChecked={Boolean(row.verified)} disabled />
          </Flex>
        </Tooltip>
      ),
    },
    {
      name: "Public",
      sortable: true,
      align: "center",
      cell: (row: any) => (
        <Tooltip
          label={row.public ? "Resturant Public" : "Resturant UnPublic"}
          hasArrow
          closeOnMouseDown={true}
        >
          <Flex
            flexDir={["column", "row"]}
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Checkbox
              isChecked={Boolean(row.public)}
              onChange={() => verifyResturant(row, "public")}
            />
          </Flex>
        </Tooltip>
      ),
    },
    {
      name: "Update",
    },
    {
      name: "Action",
      cell: (row: any) => (
        <Stack spacing="5px" padding="5px" flexDir={["column", "row"]}>
          <Button
            colorScheme="teal"
            variant={row.verified ? "ghost" : "outline"}
            outline="none"
            disabled={row.verified}
            onClick={() => verifyResturant(row, "verified")}
          >
            {row.verified ? "Verified" : "Verify"}
          </Button>
        </Stack>
      ),
    },
  ];

  useEffect(() => {
    setActiveRoute("resturant");
    getResturants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRowClicked = (row: any) => {
    navigate(`/resturant/${row.id}`);
  };

  if (resturants === null) {
    return <ResturantSkeleton />;
  }

  return (
    <Box boxShadow="md">
      <DataTable
        theme={colorMode}
        columns={columns || []}
        data={resturants || []}
        sortIcon={<BsCaretDown />}
        dense
        striped
        fixedHeader
        persistTableHead
        pagination
        responsive
        pointerOnHover
        onRowClicked={(row) => handleRowClicked(row)}
        onColumnOrderChange={(cols) => console.log(cols)}
      />
    </Box>
  );
};

export default Restaurants;

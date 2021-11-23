import { useEffect } from "react";
import { Checkbox, Stack, Button, Flex, Box, Tooltip } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { BsCaretDown } from "react-icons/bs";
import { useAppData } from "../../context/useAppData";

const Restaurants = () => {
  const {
    resturantData: { resturants, verifyResturant, getResturants },
  } = useAppData();

  const columns: any = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "User",
      selector: "contact",
      sortable: true,
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
    getResturants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box boxShadow="md">
      <DataTable
        columns={columns || []}
        data={resturants || []}
        sortIcon={<BsCaretDown />}
        dense
        striped
        fixedHeader
        persistTableHead
        pagination
        responsive
      />
    </Box>
  );
};

export default Restaurants;

import { useState, useEffect } from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DashboardSkeleton from "../../component/loaders/skeletons/dashboardskeleton";
import { useAppData } from "../../context/useAppData";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const {
    activeRoute: { setActiveRoute },
  } = useAppData();

  useEffect(() => {
    setActiveRoute("home");
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }
  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>
      <Box
        w="100%"
        h="150px"
        borderWidth="1px"
        borderRadius="lg"
        padding="5"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          height="100%"
        >
          <Text fontSize="xl">Resturants</Text>
          <Link to="/resturants">
            <Button
              marginTop="2"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
              variant="outline"
            >
              <Text fontSize="md">Visit</Text>
            </Button>
          </Link>
        </Box>
        <Text fontSize="6xl">01</Text>
      </Box>
    </Grid>
  );
};

export default Dashboard;

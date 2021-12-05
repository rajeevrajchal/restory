import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Grid, Box, Center } from "@chakra-ui/react";
import { map } from "lodash";

const DashboardSkeleton = () => {
  return (
    <SkeletonTheme highlightColor="#D8D8D8">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={6}>
        {map([1, 2, 3, 4, 5, 6], (item) => (
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
              <Skeleton height={30} width={"100%"} />
              <Skeleton height={40} width={150} />
            </Box>
            <Center>
              <Skeleton height={60} width={100} />
            </Center>
          </Box>
        ))}
      </Grid>
    </SkeletonTheme>
  );
};

export default DashboardSkeleton;

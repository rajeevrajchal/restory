import { Container, Center, Spinner } from '@chakra-ui/react';

const Splash = () => {
  return (
    <Container maxW='container.xl' height="80vh">
      <Center h='inherit'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        </Center>
      </Container>
  );
};

export default Splash;

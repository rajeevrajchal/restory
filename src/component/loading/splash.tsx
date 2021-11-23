import { Center, Spinner } from '@chakra-ui/react';

const Splash = () => {
  return (
    <Center h='100px'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Center>
  );
};

export default Splash;

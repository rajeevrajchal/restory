/* eslint-disable object-curly-newline */
/* eslint-disable jsx-quotes */
import { Flex, Heading, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const AuthHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Heading textAlign='center'>ReStory</Heading>
      {colorMode === 'light' ? (
        <MoonIcon onClick={toggleColorMode} cursor='pointer' />
      ) : (
        <SunIcon onClick={toggleColorMode} cursor='pointer' />
      )}
    </Flex>
  );
};

export default AuthHeader;

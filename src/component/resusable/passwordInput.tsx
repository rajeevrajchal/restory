import { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

interface PasswordInputProps {
  name: string;
  value: string | undefined;
  isInvalid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = (props: PasswordInputProps) => {
  const { name, value, onChange, isInvalid } = props;
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='password'
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={Boolean(isInvalid)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;

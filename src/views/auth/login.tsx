import { useState } from "react";
import { FC } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/useAuth";
import AppHelmet from "../../component/helmet";
import AuthHeader from "./components/authHeader";
import PasswordInput from "../../component/resusable/passwordInput";

const Login: FC = () => {
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  const { login } = useAuth();
  const formik = useFormik<any>({
    initialValues: {
      email: "demo@restory.com",
      password: "demopass",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await login(values.email, values.password);
      setSubmitting(false);
      setBtnLoading(true);
      resetForm();
    },
  });

  return (
    <>
      <AppHelmet title="Welcome" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Box
          bg={colorMode !== "dark" ? "gray.200" : ""}
          // border={colorMode === 'dark' ? '1px solid' : ''}
          // borderColor={colorMode === 'dark' ? 'gray.200' : ''}
          boxShadow={colorMode === "dark" ? "dark-lg" : "base"}
          padding={5}
          borderRadius="10px"
        >
          <AuthHeader />
          <FormControl id="email" marginTop={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="demouser@xyz.abc"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={Boolean(formik.errors.email && formik.touched.email)}
            />
          </FormControl>

          <FormControl id="password" marginTop={4}>
            <FormLabel>Password</FormLabel>
            <PasswordInput
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={Boolean(
                formik.errors.password && formik.touched.password
              )}
            />
          </FormControl>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop={4}
          >
            <Button
              colorScheme="teal"
              size="md"
              w="60%"
              isLoading={Boolean(btnLoading)}
              isDisabled={Boolean(btnLoading)}
              onClick={() => {
                formik.setSubmitting(true);
                setBtnLoading(true);
                formik.handleSubmit();
              }}
            >
              Login
            </Button>
            <Button
              colorScheme=""
              size="md"
              w="60%"
              variant="link"
              marginTop={4}
              isDisabled={Boolean(btnLoading)}
            >
              <Link to="/register">No Account ? Register</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

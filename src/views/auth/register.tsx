import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import AuthHeader from "./components/authHeader";
import PasswordInput from "../../component/passwordInput";
import AppHelmet from "../../component/helmet";
import { useAuth } from "../../context/useAuth";

const Register = () => {
  const { colorMode } = useColorMode();
  const { register } = useAuth();

  const formik = useFormik<any>({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await register(values);
      setSubmitting(false);
      resetForm();
    },
  });

  return (
    <>
      <AppHelmet title="Create account" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
      >
        <Box
          bg={colorMode !== "dark" ? "gray.200" : ""}
          border={colorMode === "dark" ? "1px solid" : ""}
          borderColor={colorMode === "dark" ? "gray.200" : ""}
          padding={5}
          borderRadius="10px"
        >
          <AuthHeader />
          <Stack direction={["column", "row"]} spacing="24px" marginTop={4}>
            <FormControl id="firstname">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Jane"
                variant="outline"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                isInvalid={Boolean(
                  formik.errors.firstname && formik.touched.firstname
                )}
              />
            </FormControl>

            <FormControl id="lastname">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Doe"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                isInvalid={Boolean(
                  formik.errors.lastname && formik.touched.lastname
                )}
              />
            </FormControl>
          </Stack>

          <FormControl id="username" marginTop={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="janedoe"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              isInvalid={Boolean(
                formik.errors.username && formik.touched.username
              )}
            />
          </FormControl>

          <FormControl id="email" marginTop={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="jane@xyz.abc"
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
              disabled={formik.isSubmitting}
              isLoading={formik.isSubmitting}
              onClick={() => formik.handleSubmit()}
            >
              Register
            </Button>
            <Button
              colorScheme=""
              size="md"
              w="60%"
              variant="link"
              disabled={formik.isSubmitting}
              marginTop={4}
            >
              <Link to="/login">Already has account ? Login</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;

import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ThemeToggler } from "../Theme/ThemeToggler";

export const NavBar = () => {
  const { logout } = useAuth();
  return (
    <Box minHeight="100vh">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg={useColorModeValue("blue.300", "blue.600")}
        color="white"
      >
        <Text as="h2" fontSize={24} fontWeight="bold">
          TODOMTUCI
        </Text>
        <Stack direction="row" align="center" spacing={4}>
          <ThemeToggler size="lg" />
          <Button onClick={logout} colorScheme="blue">
            Logout
          </Button>
        </Stack>
      </Flex>
      <Outlet />
    </Box>
  );
};

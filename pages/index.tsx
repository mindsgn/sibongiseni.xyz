import { Box, Heading } from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { Portfolio } from "../components/portfolio";
import { Links } from "../components/link";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      width="100vw"
      height="100vh"
      padding={10}
    >
      <Logo />
      <Links />
      <Portfolio />
    </Box>
  );
}

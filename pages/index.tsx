import { Box, Container, Heading } from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { Portfolio } from "../components/portfolio";
import { Links } from "../components/link";
import { Explainer } from "../components/explainer";

export default function Home() {
  return (
    <Container padding={"1em"}>
      <Logo />
      <Links />
      <Explainer />
      <Portfolio />
    </Container>
  );
}

import { Box, Heading } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Heading
      cursor="pointer"
      fontFamily={"pixel"}
      fontSize={{ base: "3em", md: "3.2em", lg: "3.3em" }}
    >{`SIBONGISENI.XYZ`}</Heading>
  );
};

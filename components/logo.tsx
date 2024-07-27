import { Box, Heading } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Box
      paddingY={5}>
      <Heading
        cursor="pointer"
        fontFamily={"pixel"}
      >
        {`SIBONGISENI`}
      </Heading>
    </Box>
  );
};

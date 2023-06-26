import { Box, Heading, Text } from "@chakra-ui/react";
import { portfolio as portfolioList } from "./../constants/index";

export const Portfolio = () => {
  const handleOpenNewWindow = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Box padding={"1em"}>
      <Box cursor="pointer">
        <Heading>PORTFOLIO</Heading>
      </Box>
      {portfolioList.map((project: any) => {
        return (
          <Box
            key={`${project.name}`}
            display="flex"
            gap=".5em"
            cursor="pointer"
            onClick={() => handleOpenNewWindow(`${project.link}`)}
          >
            <Text fontWeight={"bold"}>{`${project.name}`}</Text>
            <Text>{`${project.shortExplainer}`}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

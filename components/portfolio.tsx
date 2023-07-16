import { Box, Heading, Text } from "@chakra-ui/react";
import { portfolio as portfolioList } from "./../constants/index";
import { motion } from "framer-motion";

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
            as={motion.div}
            key={`${project.name}`}
            display="flex"
            gap=".5em"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
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

import { Box, Heading, Text } from "@chakra-ui/react";
import { portfolio as portfolioList } from "./../constants/index";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const handleOpenNewWindow = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Box
    borderTop={'2px solid gray'}>
      {portfolioList.map((project: any) => {
        return (
          <Box
            borderBottom={'2px solid gray'}
            paddingTop={4}
            paddingBottom={4}
            as={motion.div}
            key={`${project.name}`}
            display="flex"
            alignItems={'end'}
            gap=".5em"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            cursor="pointer"
            onClick={() => handleOpenNewWindow(`${project.link}`)}
          >
            <Heading
              size='md'
              margin={0} 
              padding={0}>
                {`${project.name}`}
            </Heading>
            <Text 
              color={'gray.300'}>
                {`${project.shortExplainer}`}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

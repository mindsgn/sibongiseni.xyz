import { Box, Heading, Text } from "@chakra-ui/react";
import { links } from "./../constants/index";
import { motion } from "framer-motion";

export const Links = () => {
  const handleOpenNewWindow = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Box display={"flex"} gap={"0.5em"} padding={"1em"}>
      {links.map((project: any) => {
        return (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={`${project.name}`}
            display={"flex"}
            gap={"1em"}
            fontWeight={"bold"}
            cursor="pointer"
            onClick={() => handleOpenNewWindow(`${project.link}`)}
          >
            <Text>{`${project.name}`}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

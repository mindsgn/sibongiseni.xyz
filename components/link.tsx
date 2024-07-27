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
            key={`${project.name}`}
            display={"flex"}
            gap={"1em"}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            fontWeight={"bold"}
            cursor="pointer"
            onClick={() => handleOpenNewWindow(`${project.link}`)}
          >
            <Text
              as={motion.div}
            >{`${project.name}`}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

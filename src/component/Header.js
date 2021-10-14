import Navbar from "./Navbar";
import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Head = () => {
  return (
    <div
      style={{
        backgroundImage: `URL("photo/3606214_0000s_0005s_0002_Rectangle.png")`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div>
          <Navbar />

          <Flex
            direction={["column", "column", "row", "row", "row"]}
            justifyContent="space-between"
            alignItems="center"
            padding="0rem 5rem 0rem 5rem"
          >
            <Box
              display={["none", "none", "block", "block", "block"]}
              width="30rem"
              margin="2rem"
              marginRight="2rem"
              fontSize={["0", "0", "5em", "6em", "7em"]}
            >
              <motion.div
                style={{
                  color: "#42200B",
                  textShadow: " 3px 3px 1px white",
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                BURGER<div>WEEK</div>
              </motion.div>
            </Box>
            <motion.div
              style={{ width: "25rem" }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img style={{ height: "auto" }} src="photo/brugerGroup.png" />
            </motion.div>
          </Flex>
        </div>
      </div>
    </div>
  );
};
export default Head;

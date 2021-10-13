import Navbar from "./Navbar";
import { Flex, Box } from "@chakra-ui/react";
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
              <div
                style={{
                  color: "#42200B",
                  textShadow: " 3px 3px 1px white",
                }}
              >
                BURGER<div>WEEK</div>
              </div>
            </Box>
            <Box width="25rem">
              <img style={{ height: "auto" }} src="photo/brugerGroup.png" />
            </Box>
          </Flex>
        </div>
      </div>
    </div>
  );
};
export default Head;

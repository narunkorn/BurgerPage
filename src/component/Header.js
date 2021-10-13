import Navbar from "./Navbar";
import { Flex, Image } from "@chakra-ui/react";
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
            <Flex
              display={["none", "none", "block", "block", "block"]}
              fontSize={["none", "none", "6rem", "7rem", "8rem"]}
            >
              <div
                style={{
                  color: "#42200B",
                  textShadow: " 3px 3px 1px white",
                }}
              >
                BURGER<div>WEEK</div>
              </div>
            </Flex>

            <img
              style={{
                width: "25rem",
                height: "auto",
              }}
              src="photo/brugerGroup.png"
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};
export default Head;

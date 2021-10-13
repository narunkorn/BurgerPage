import { Flex, Image } from "@chakra-ui/react";
const PictureBurger = () => {
  return (
    <Flex
      marginTop="2rem"
      justifyContent="space-between"
      alignItems="center"
      padding="0rem 2rem"
      direction={["column", "column", "row", "row", "row"]}
    >
      <Flex>
        <img
          style={{ width: "35rem" }}
          src="photo/3606214_0001s_0001s_0001_Image.png"
        />
      </Flex>

      <Flex marginTop={["2rem", "2rem", "0rem", "0rem", "0rem"]}>
        <img
          style={{ width: "35rem" }}
          src="photo/3606214_0001s_0001s_0002_Image.png"
        />
      </Flex>
    </Flex>
  );
};
export default PictureBurger;

import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
const MenuBurger = () => {
  const [datas, setData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch("dataBurger.json");
      let mydata = await res.json();
      setData(mydata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(datas, "555");
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "300%",
        marginTop: "20px",
        color: "#42200B",
      }}
    >
      My BURGER
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        {datas.map((data) => {
          return (
            <div key={data.id}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ width: "50%" }} src={data.photo} />
              </div>

              <div
                style={{
                  fontSize: "30%",
                  marginTop: "20px",
                }}
              >
                {data.name}
              </div>
              <Button colorScheme="orange" variant="solid">
                Details
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBurger;

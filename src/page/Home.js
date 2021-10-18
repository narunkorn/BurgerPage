import Header2 from "../component_2/Header2";
import Contact from "../component_2/Contact";
import BurgerMenu from "../component_2/BurgerMenu";

const Home = () => {
  return (
    <div>
      <Header2 />
      <BurgerMenu />
      <Contact />
      <div style={{ height: "50px", backgroundColor: "#a01d09" }}></div>
    </div>
  );
};
export default Home;

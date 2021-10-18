import "./Header2.css";
import Navbar2 from "../component_2/Navbar2";
import Banner from "./Banner";
import { Button, Dropdown } from "react-bootstrap";
const Header2 = () => {
  return (
    <div>
      <div className="background">
        <Navbar2 />
      </div>
      <Banner />
    </div>
  );
};

export default Header2;

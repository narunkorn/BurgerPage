import { ButtonGroup, Dropdown, DropdownButton, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar2.css";

const Navbar2 = () => {
  const color = "#194d33";
  return (
    <div className="containner">
      <div>
        <img src="photo/3606214_0000s_0000s_0000_Place-Your-Logo-Here-(Double-Click-to-Edit).png" />
      </div>
      <div className="burgermenu">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
            <Dropdown.Item href="#/action-2">BurgerMenu</Dropdown.Item>
            <Dropdown.Item href="#/action-3">ContactUs</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <p className="fullmenu">
        <span>Home </span>
        <span>BurgerMenu </span>
        <span>ContactUs </span>
      </p>
    </div>
  );
};
export default Navbar2;

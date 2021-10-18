import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar2.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const close = () => {
    setClick(false);
  };
  useEffect(() => {
    close();
  }, []);
  return (
    <div className="containner">
      <div>
        <img src="photo/3606214_0000s_0000s_0000_Place-Your-Logo-Here-(Double-Click-to-Edit).png" />
      </div>

      <ul className={click ? "mobile-menu" : "menu"}>
        <li className="menu-li" onClick={close}>
          <a href="#Home">Home </a>
        </li>
        <li className="menu-li" onClick={close}>
          <a href="#BurgerMenu">BurgerMenu </a>
        </li>
        <li className="menu-li" onClick={close}>
          <a href="#Contact">contact us </a>
        </li>
      </ul>
      <div className="burgermenu" onClick={handleClick}>
        {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};
export default Navbar2;

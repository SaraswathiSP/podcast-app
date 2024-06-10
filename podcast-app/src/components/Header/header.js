import { FaHome, FaCog, FaBell } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718002852/directright_1_wncml7.png"
          alt="Logo"
          className="logo"
        />
        <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1718002377/LAMA._ai7omm.png" />
      </div>
      <div className="header-right">
        <FaCog className="icon" />
        <FaBell className="icon" />
      </div>
    </header>
  );
};

export default Header;

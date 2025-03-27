import React from "react";
import Logo from "../../assets/website/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Logo} alt="" className="w-10" />
            </a>
            Books
          </div>
          <div>
            <ul>
              <li>Home</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

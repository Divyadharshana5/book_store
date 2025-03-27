import React from "react";
import Logo from "../../assets/website/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="fond-bold text-3xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
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

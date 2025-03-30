import React from "react";
import Logo from "../../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-3xl sm:text-3xl flex gap-2 items-center justify-center"
            >
              <img src={Logo} alt="" className="w-16 h-16 " />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

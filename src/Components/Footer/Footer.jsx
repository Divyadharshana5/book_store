import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },

  {
    title: "About",
    link: "/about",
  },

  {
    title: "Contact",
    link: "/contact",
  },

  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 ">
              Book Store
            </h1>
            <p>
              A good bookshop is not just about selling books from shelves, but
              reaching out into the world and making a difference. ~ David
              Almond What I say is, a town isn’t a town without a bookstore.
            </p>
            <br />

            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida,Uttar Pradesh</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 987654321</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pt-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLinks.map((data) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-
                    hover:text-primary space-x-1 text-gray-500"
                    >
                      <span>&#11162;</span>
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

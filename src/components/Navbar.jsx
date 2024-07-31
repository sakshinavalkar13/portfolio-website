import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-zinc-900">
      <div>
        <h1 className="text-3xl cursor-pointer px-5"><span className="text-blue-500  hover:text-yellow-400">Sakshi</span></h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link= {link}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500  hover:scale-105 duration-200"
          />
          
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-zinc-900 to-gray-500 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4  py-6  text-4xl cursor-pointer capitalize font-medium text-gray-500  hover:scale-105 duration-200"
              onClick={() => setNav(!nav)}
              />

          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

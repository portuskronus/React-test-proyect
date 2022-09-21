import React from "react";
import { useState } from "react";
import { navLinks } from "../constants/index";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  return (

   <nav className="w-full flex py-4 justify-between items-center bg-black bg-opacity-70">
        <ul className="list-none flex  items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-gafata font-thin text-yellow-600 hover:text-yellow-300 cursor-pointer text-[16px]
          
               ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div> <Button/></div>
      </nav>
  
    )
};

export default Navbar;

import React from "react";

import { navLinks } from "../constants/index";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar bg-black bg-opacity-60 ">
      <ul className="list-none flex  items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-gafata font-thin text-yellow-600 hover:text-yellow-300 cursor-pointer text-[16px]
          
               ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      
      <div>
        {" "}
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={` py-2.5 px-10 font-gafata font-medium text-[12px] text-yellow-300 bg-black hover:text-black hover:bg-yellow-300 rounded-full outline  ${styles}`}
  >
    ENTER TO WIN
  </button>
);

export default Button;

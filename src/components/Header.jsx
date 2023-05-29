/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={50} height={50} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;

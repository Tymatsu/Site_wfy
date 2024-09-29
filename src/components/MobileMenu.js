"use client"; // Este é um Client Component

import { useState } from "react";
import { Link } from "../../navigation";
import LangSwitcher from "./LangSwitcher";

const MobileMenu = ({ translations }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Ícone do menu sanduíche */}
      <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
        <svg
          className="w-8 h-8 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menu sanduíche */}
      {menuOpen && (
        <nav className="fixed top-0 left-0 w-1/2 h-auto bg-white shadow-lg z-20 lg:hidden rounded-br-3xl">
          <ul className="flex flex-col gap-8 p-10">
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none flex gap-7"
            >
              <svg
                className="w-8 h-8 text-custom-marrom1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <p className="font-oswald text-custom-marrom1 text-2xl">Menu</p>
            </button>
            <li className="hover:text-blue-200">
              <Link
                href={`/`}
                onClick={toggleMenu}
                className="hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href={`/chapters`} onClick={toggleMenu}>
                {translations.text1}
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                {translations.text2}
              </Link>
            </li>
            {/* <li>
              <Link href="/contact" onClick={toggleMenu}>
                {translations.text3}
              </Link>
            </li> */}
            {/* <li>
              <Link href="https://wa.me/message/KWA4CXA3H5DTJ1">
                <button className="bg-custom-azul2 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                  {translations.text4}
                </button>
              </Link>
            </li> */}
            <li className="flex">
              <LangSwitcher />
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;

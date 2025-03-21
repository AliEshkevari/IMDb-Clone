import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false)

  return (
    <header className="header flex items-center justify-evenly bg-secondary_black p-3 md:p-4">
      <div className="flex items-center gap-4 xl:hidden">
        <div
          className="p-2 rounded-full hover:bg-gray cursor-pointer transition duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars className="text-textWhite text-xl" />
        </div>
        <a href="https://www.imdb.com">
          <img
            src="assets/IMDB_Logo.png"
            className="w-12 md:w-16"
            alt="IMDb Logo"
          />
        </a>
      </div>

      <div className="hidden xl:block">
        <a href="https://www.imdb.com">
          <img src="assets/IMDB_Logo.png" className="w-16" alt="IMDb Logo" />
        </a>
      </div>
      <div
        className="hidden xl:flex items-center gap-2 p-2 rounded-full hover:bg-gray cursor-pointer
       transition duration-200"
      >
        <FaBars className="text-textWhite" />
        <span className="text-textWhite font-[Amazonember]">Menu</span>
      </div>

      <div className={`search-bar-container hidden md:flex items-center bg-textWhite rounded-md overflow-hidden transition-all duration-200
        ${isFocused ? 'border-[3px] border-yellow' : 'border-[3px] border-transparent'}`}>
        <div className="flex items-center p-2 border-r border-gray-300 cursor-pointer">
          <span className="text-xs md:text-sm">All</span>
          <IoIosArrowDown className="ml-1 text-secondary_black" />
        </div>
        <div className="relative flex items-center">
          <input
            className="py-2 px-3 w-64 lg:w-80 text-secondary_black focus:outline-none"
            placeholder="Search IMDb"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <IoMdSearch className="text-secondary_black text-xl absolute right-2 cursor-pointer" />
        </div>
      </div>
      <IoMdSearch className="md:hidden text-textWhite text-2xl cursor-pointer" />

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden lg:flex items-center p-2 rounded-full hover:bg-gray cursor-pointer transition duration-200">
          <span className="text-textWhite font-bold">IMDb</span>
          <span className="text-blue font-bold">Pro</span>
        </div>
        <div className="hidden lg:block h-6 w-[0.1rem] bg-textWhite mx-2" />
        <div className="hidden lg:flex items-center gap-2 p-2 rounded-full hover:bg-gray cursor-pointer transition duration-200">
          <BsBookmarkPlus className="text-textWhite text-xl" />
          <span className="text-textWhite">Watchlist</span>
          <span className="bg-yellow text-black px-2 py-1 rounded-full text-xs">
            456
          </span>
        </div>

        <div className="flex items-center gap-1 p-2 rounded-full hover:bg-gray cursor-pointer transition duration-200">
          <FaUser className="text-textWhite text-lg" />
          <span className="text-textWhite text-xs md:text-sm">
            User <IoIosArrowDown className="inline" />
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-1 p-2 rounded-full hover:bg-gray cursor-pointer transition duration-200">
          <span className="text-textWhite">
            EN <IoIosArrowDown className="inline" />
          </span>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary_black text-textWhite p-4 xl:hidden z-10">
          <ul className="flex flex-col gap-4">
            <li className="hover:bg-gray p-2 rounded-md cursor-pointer">
              Menu
            </li>
            <li className="hover:bg-gray p-2 rounded-md cursor-pointer">
              IMDb Pro
            </li>
            <li className="hover:bg-gray p-2 rounded-md cursor-pointer">
              Watchlist
            </li>
            <li className="hover:bg-gray p-2 rounded-md cursor-pointer">EN</li>
          </ul>
        </div>
      )}
    </header>
  );
}

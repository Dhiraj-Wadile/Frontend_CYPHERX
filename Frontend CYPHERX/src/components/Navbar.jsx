// Navbar.jsx
import React, { useState } from "react";
import { FaSun, FaMoon, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";


const Navbar = ({ setGroupBy, setOrderingBy }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (option) => {
    if (option === "user" || option === "status" || option === "priority") {
      setGroupBy(option);
    } else if (option === "title" || option === "priority") {
      setOrderingBy(option);
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="p-4 text-black flex justify-between items-center shadow">
      <div className="flex items-center space-x-4">
        <div className="relative inline-block text-left">
          <button
            className="flex items-center p-2 rounded focus:outline-none shadow shadow-lg"
            onClick={toggleDropdown}
          >
            <HiAdjustmentsHorizontal className="mr-2" />
            <span>Display</span>
            {isDropdownOpen ? (
              <FaAngleUp className="ml-2" />
            ) : (
              <FaAngleDown className="ml-2" />
            )}
          </button>
          <div
            className={`${
              isDropdownOpen ? "" : "hidden"
            } origin-top-right absolute right-30 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
          >
            <div
              className="py-1 flex gap-10 w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <span
                className={`px-4 py-2 text-sm w-28 text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                Group By
              </span>
              <select
                onChange={(e) => handleOptionChange(e.target.value)}
                className="dropdown-main  px-1.5 py-1 text-gray-500 bg-gray border rounded-md shadow-sm outline-none focus:border-gray-500"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div
              className="py-1 flex gap-10 w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <span
                className={`px-4 py-2 text-sm w-28 text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
              >
                Order By
              </span>
              <select
                onChange={(e) => handleOptionChange(e.target.value)}
                className="dropdown-main  px-1.5 py-1 text-gray-500 bg-gray border rounded-md shadow-sm outline-none focus:border-gray-500"
              >
                <option value="title">Status</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="mr-4" onClick={toggleTheme}>
          {isDarkMode ? (
            <FaSun className="text-gray" />
          ) : (
            <FaMoon className="text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

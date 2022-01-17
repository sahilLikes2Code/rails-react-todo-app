import React from "react";

import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <NavItem name="Todos" path="/" />
              <NavItem
                name="Add"
                iconClass="ri-add-fill"
                path="/tasks/create"
              />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <a className="inline-flex items-center px-1 pt-1 text-sm font-semibold leading-5 text-opacity-50 border-b-2 border-transparent transition duration-150 ease-in-out cursor-pointer text-bb-gray-600 hover:text-bb-gray-600 focus:outline-none focus:text-bb-gray-700">
              LogOut
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/karanganyar.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path, section) => {
    navigate(path);
    setTimeout(() => {
      const sectionElement = document.querySelector(`#${section}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 shadow-md fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Desa Buntar Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-3xl font-extrabold tracking-wide">Desa Buntar</h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li className="my-2 md:my-0">
              <Link
                to="/"
                className="hover:underline hover:text-green-300 transition duration-300 ease-in-out"
              >
                Beranda
              </Link>
            </li>
            <li className="my-2 md:my-0 relative group">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 hover:bg-green-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Profile Desa
                    <ChevronDownIcon
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/struktur-organisasi"
                          className={`${
                            active ? "bg-green-500 text-white" : "text-gray-900"
                          } block px-4 py-2 text-sm transition duration-300 ease-in-out`}
                        >
                          Struktur Organisasi
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/sejarah-desa"
                          className={`${
                            active ? "bg-green-500 text-white" : "text-gray-900"
                          } block px-4 py-2 text-sm transition duration-300 ease-in-out`}
                        >
                          Sejarah Desa
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/potensi-desa"
                          className={`${
                            active ? "bg-green-500 text-white" : "text-gray-900"
                          } block px-4 py-2 text-sm transition duration-300 ease-in-out`}
                        >
                          Potensi Desa
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </li>
            <li className="my-2 md:my-0">
              <Link
                to="/agenda"
                className="hover:underline hover:text-green-300 transition duration-300 ease-in-out"
              >
                Agenda
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <a
                onClick={() => handleNavClick("/", "galeri")}
                className="cursor-pointer hover:underline hover:text-green-300 transition duration-300 ease-in-out"
              >
                Galeri
              </a>
            </li>
            <li className="my-2 md:my-0">
              <a
                onClick={() => handleNavClick("/", "kontak")}
                className="cursor-pointer hover:underline hover:text-green-300 transition duration-300 ease-in-out"
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

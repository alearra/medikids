import { useState } from "react";
import logo from "../assets/static/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 flex flex-row items-center justify-between  sm:flex-row sm:justify-between sm:items-center border-none">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center justify-center">
              <img
                className="h-8 w-auto  rounded-sm bg-opacity-90 backdrop-blur-sm mr-2"
                src={logo}
                alt=""
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-pantoneP346"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen ? "opacity-100" : "opacity-0"
            } lg:opacity-100 lg:relative lg:w-auto lg:p-0 lg:top-0 lg:translate-x-0 lg:shadow-none absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-50 mt-2 shadow-md lg:bg-transparent lg:mt-0`}
          >
            <div className="lg:flex lg:items-center">
              <Link
                to="/"
                className="block mx-1 px-3 py-1 text-base font-medium text-gray-900 capitalize transition-colors duration-700 transform rounded-sm hover:bg-ale hover:text-pantoneP111 hover:bg-opacity-90 hover:backdrop-blur-sm "
              >
                Home
              </Link>
              <Link
                to="/nosotros"
                className="block mx-1 px-3 py-1 text-base font-medium text-gray-900 capitalize transition-colors duration-700 transform rounded-sm hover:bg-ale hover:text-pantoneP111 hover:bg-opacity-90 hover:backdrop-blur-sm "
              >
                Nosotros
              </Link>
              <Link
                to="/especialidades"
                className="block mx-1 px-3 py-1 text-base font-medium text-gray-900 capitalize transition-colors duration-700 transform rounded-sm hover:bg-ale hover:text-pantoneP111 hover:bg-opacity-90 hover:backdrop-blur-sm "
              >
                Especialidades
              </Link>

              <Link
                to="/contacto"
                className="block mx-1 px-3 py-1 text-base font-medium text-gray-900 capitalize transition-colors duration-700 transform rounded-sm hover:bg-ale hover:text-pantoneP111 hover:bg-opacity-90 hover:backdrop-blur-sm "
              >
                Contacto
              </Link>

              <a
                href="https://www.mrturno.com/p/@medikids/medikids"
                target="_blank"
              >
                <button className="block shadow mx-1 px-3 py-1 bg-pantoneP346 text-base font-medium text-slate-50 capitalize transition-colors duration-200 transform rounded-md hover:bg-pantoneP346/90 hover:text-white hover:font-semibold">
                  {" "}
                  Turnos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

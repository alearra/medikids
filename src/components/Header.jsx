import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/static/logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" font-NUNITO bg-white shadow sticky top-0">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-12 sm:h-12" src={logo} alt="Logo Medikids" />
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
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Home
            </Link>
            <Link
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/nosotros"
            >
              Nosotros
            </Link>
            <a
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Especialidades
            </a>
            <a
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Obras Sociales
            </a>
            <a
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Laboratorio
            </a>
            <a
              className="my-2 text-{#898a8d} transition-colors duration-300 transform font-semibold hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contacto
            </a>
          </div>

          <div className="flex justify-center md:block">
          <a
              className="bg-pantoneP346 p-2 rounded-md my-2 text-slate-50 transition-colors duration-300 transform font-semibold hover:text-blue-500  md:mx-4 md:my-0"
              href="https://www.mrturno.com/p/@medikids/medikids"
              target="_blank"
            >
              Turnos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

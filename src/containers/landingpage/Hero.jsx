import React, { useState, useEffect } from "react";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1632053002928-1919605ee6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80",
    "https://images.pexels.com/photos/8460049/pexels-photo-8460049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6627462/pexels-photo-6627462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="bg-slate-50 h-auto lg:h-auto flex items-center justify-center">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        {/* header text */}
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-pantoneP111 lg:text-4xl">
              Centro Pediátrico Integral
            </h1>
            <p className="mt-4 text-gray-900 text-base">
              Recién Nacidos, Niños y Adolescentes.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">27 Especialidades</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">
                  Amplio horario de atención
                </span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">
                  Obras sociales y prepagas
                </span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">
                  Equipos de última tecnología
                </span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">Guardia 24hs</span>
              </div>
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <svg
                  className="w-5 h-5 mx-3 text-pantoneP346"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3 text-gray-900">Laboratorio</span>
              </div>
            </div>
            <br />
            <a
              href="https://www.mrturno.com/p/@medikids/medikids"
              target="_blank"
            >
              <button className="block shadow mx-1 px-3 py-1 bg-pantoneP346 text-base font-medium text-slate-50 capitalize transition-colors duration-200 transform rounded-md hover:bg-pantoneP346/90 hover:text-white hover:font-semibold">
                Turnos
              </button>
            </a>
          </div>
        </div>
        {/* header img */}
        <div className="flex items-center justify-center w-full h-auto lg:w-1/2 lg:h-screen lg:bg-slate-100">
          <img
            className="object-cover w-full h-96 max-w-2xl transition duration-700 rounded-md shadow-md"
            src={images[currentIndex]}
            alt="glasses photo"
          />
        </div>
      </div>
    </header>
  );
};

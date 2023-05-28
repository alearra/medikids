import React from "react";

export const Formulario = () => {
  return (
    <section className="py-6 bg-white font-NUNITO">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-pantoneP111">Envíanos tu consulta</h1>
          <p className="pt-2 pb-4 text-[#898a8d] text-xl font-normal sm:mb-12">Atendemos los 365 días del año</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-[#898a8d]">Ciudad de Mendoza - ARG</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-[#898a8d]">+549(261)5776043</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-[#898a8d]">info@medikids.com.ar</span>
            </p>
          </div>
        </div>
        <form
          novalidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
          {/* nombre */}
            <input
              type="text"
              placeholder="Nombre"
              className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            />
          </label>
          <label className="block">
            {/* email */}
            <input
              type="email"
              placeholder="Email"
              className="block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            />
          </label>
          <label className="block">
            {/* mensaje */}
            <textarea
              rows="3"
              placeholder="Mensaje"
              className="block w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-pantoneP346 text-slate-50 focus:ring-violet-400 hover:ring-violet-400"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
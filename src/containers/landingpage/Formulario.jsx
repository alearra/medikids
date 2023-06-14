import React from "react";
import "../../styles/inputs.css";
/* formulario */
export const Formulario = () => {
  return (
    <section className="py-6 bg-white font-NUNITO">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-3xl font-semibold capitalize tracking-wide text-pantoneP111 lg:text-4xl">
            Envíanos tu consulta
          </h1>
          <p className="pt-2 pb-4 text-gray-900 text-lg font-normal sm:mb-12">
            Atendemos los 365 días del año
          </p>
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
              <span className="text-gray-900">Cnel Rodríguez 118 - MZA</span>
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
              <span className="text-gray-900">261-5776043</span>
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
              <span className="text-gray-900">261-3356915</span>
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
              <span className="text-gray-900">info@medikids.com.ar</span>
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            {/* nombre */}
            <input
              type="text"
              placeholder="Nombre"
              className="p-1.5 block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            />
          </label>
          <label className="block">
            {/* email */}
            <input
              type="email"
              placeholder="Email"
              className="p-1.5 block w-full rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            />
          </label>
          <label className="block">
            {/* mensaje */}
            <textarea
              rows="3"
              placeholder="Mensaje"
              className="textarea1 p-1.5 block w-full rounded-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-slate-50"
            ></textarea>
          </label>
          <br />
          <button
            type="button"
            className="self-center block shadow mx-1 px-3 py-1 bg-pantoneP346 text-base font-medium text-slate-50 capitalize transition-colors duration-200 transform rounded-md hover:bg-pantoneP346/90 hover:text-white hover:font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

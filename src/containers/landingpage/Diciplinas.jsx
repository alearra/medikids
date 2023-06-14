import React from "react";

export const Diciplinas = () => {
  return (
    <section className=" bg-slate-50 font-NUNITO">
      <div className="container p-4 mx-auto  text-center">
        {/* <span className="text-xs font-semibold tracking-wider uppercase text-violet-400">
          shortcut to your dream ui
        </span> */}
        <h2 className="text-3xl text-center font-semibold capitalize tracking-wide text-pantoneP111 lg:text-4xl">
        Equipo médico interdiciplinario
        </h2>
        <p className="mt-4 text-gray-900 text-base">
        Acompañamos a los padres en el crecimiento y desarrollo de sus hijos.
        </p>
      </div>
      <div className="container grid justify-center gap-4 lg:p-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col px-8 py-6 shadow rounded-md bg-slate-100 transition-colors duration-700 transform hover:bg-pantoneP178">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Clínica pediátrica
          </h2>
          <p className="flex-1 leading-relaxed text-gray-900 text-base">
          Amplio equipo de médicos pediatras para la atención de sus hijos.
          </p>
          {/* <a
            className="inline-flex items-center space-x-2 text-sm text-violet-400"
            href="/components"
          >
            <span>Consultar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid shadow rounded-md bg-slate-100 transition-colors duration-700 transform hover:bg-pantoneP178">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Especialidades
          </h2>
          <p className="flex-1 leading-relaxed text-gray-900 text-base">
          Contamos con un gran equipo en diferentes especialidades.
          </p>
          {/* <a
            className="inline-flex items-center space-x-2 text-sm text-violet-400"
            href="/sections"
          >
            <span>Consultar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
        <div className="flex flex-col px-8 py-6 shadow rounded-md bg-slate-100 transition-colors duration-700 transform hover:bg-pantoneP178">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Odontopediatría
          </h2>
          <p className="flex-1 leading-relaxed text-gray-900 text-base">
          La salud bucal es fundamental desde la temprana edad.
          </p>
          {/* <a
            className="inline-flex items-center space-x-2 text-sm text-violet-400"
            href="/templates"
          >
            <span>Consultar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
        <div className="flex flex-col px-8 py-6 shadow rounded-md bg-slate-100 transition-colors duration-700 transform hover:bg-pantoneP178">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Obras Sociales
          </h2>
          <p className="flex-1 leading-relaxed text-gray-900 text-base">
          Contamos con el acompañamiento de importantes Obras Sociales.
          </p>
          {/* <a
            className="inline-flex items-center space-x-2 text-sm text-violet-400"
            href="/docs"
          >
            <span>Consultar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
};

import React from "react";

export const Diciplinas = () => {
  return (
    <section className="m-4 md:m-8 bg-slate-50 font-NUNITO rounded-md">
      <div className="container p-4 mx-auto my-6 space-y-1 text-center">
        {/* <span className="text-xs font-semibold tracking-wider uppercase text-violet-400">
          shortcut to your dream ui
        </span> */}
        <h2 className="pb-3 text-3xl font-bold md:text-4xl text-pantoneP111">
        Equipo médico interdiciplinario
        </h2>
        <p className="text-[#898a8d] text-xl font-normal sm:mb-12">
        Acompañamos a los padres en el crecimiento y desarrollo de sus hijos.
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Clínica pediátrica
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-[#898a8d]">
          Amplio equipo de médicos pediatras para la atención de sus hijos.
          </p>
          <a
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
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Especialidades
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-[#898a8d]">
          Contamos con un gran equipo en diferentes especialidades.
          </p>
          <a
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
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Odontopediatría
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-[#898a8d]">
          La salud bucal es fundamental desde la temprana edad.
          </p>
          <a
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
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-pantoneP111">
          Obras Sociales
          </h2>
          <p className="flex-1 mb-4 text-base leading-relaxed text-[#898a8d]">
          Contamos con el acompañamiento de importantes Obras Sociales.
          </p>
          <a
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
          </a>
        </div>
      </div>
    </section>
  );
};

import React from "react";

export const Hero = () => {
  return (
    <section className="bg-white font-NUNITO">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold text-pantoneP111 leading-none sm:text-6xl">
            Primer Centro Pediatrico integral.
          </h1>
          <p className="mt-6 mb-8 text-xl font-medium sm:mb-12">
            Recién Nacidos, Niños y Adolescentes de Mendoza.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="https://www.mrturno.com/p/@medikids/medikids"
              target="_blank"
              className="px-8 py-3 text-lg font-semibold rounded bg-pantoneP346 text-slate-50"
            >
              Turnos
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://medikids.com.ar/principal/wp-content/uploads/2019/09/slide-doctor-1.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

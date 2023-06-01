import React from "react";

export const WelcomeEspecialidades = () => {
  return (
    <section className="bg-white font-NUNITO">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-pantoneP111 capitalize lg:text-3xl">
          Nuestras Especialidades
        </h1>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-pantoneP346 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-pantoneP346 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-pantoneP346 rounded-full"></span>
        </div>
        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <div>
            <p className="flex items-center text-start  text-xl font-medium sm:mb-12 lg:mx-8">
              Medikids surge desde la idea de un grupo de profesionales con
              amplia experiencia, que sueñan con un Centro Pediátrico Privado,
              que responda a las necesidades de todos los mendocinos. Un centro
              en el que puedan comulgar todas las subespecialidades pediátricas
              en su conjunto.
            </p>

          </div>
        </div>
      </div>

      
    </section>
  );
};

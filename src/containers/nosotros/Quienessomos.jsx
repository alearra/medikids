import React from "react";

export const Quienessomos = () => {
  return (
    <section className="bg-white font-NUNITO">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-pantoneP111 capitalize lg:text-3xl">
          Quiénes Somos
        </h1>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-pantoneP346 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-pantoneP346 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-pantoneP346 rounded-full"></span>
        </div>
        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <div>
            <p className="flex items-center text-justify  text-xl font-medium sm:mb-12 lg:mx-8">
              Medikids, centro pediátrico privado en Mendoza. Nuestro equipo de
              profesionales con amplia experiencia comparte un sueño: crear un
              centro pediátrico que satisfaga las necesidades de la comunidad
              mendocina. En Medikids, todas las subespecialidades pediátricas se
              unen para brindar una atención integral.
            </p>

            <p className="flex items-center text-justify  text-xl font-medium sm:mb-12 lg:mx-8">
              Nuestro objetivo es convertirnos en la empresa líder en salud
              infantil en la provincia, con proyección nacional y regional.
              Nuestra misión es brindar un servicio médico de calidad
              excepcional los 365 días del año, brindando seguridad y
              confiabilidad a las familias.
            </p>

            <p className="flex items-center text-justify  text-xl font-medium sm:mb-12 lg:mx-8">
              Acompañamos a nuestros pacientes en todo el proceso de diagnóstico
              y recuperación, siempre a la vanguardia de los avances
              científicos. Además, promovemos la formación continua a través de
              nuestro Comité de Docencia e Investigación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

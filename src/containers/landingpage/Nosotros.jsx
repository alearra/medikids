import React from "react";

export const Nosotros = () => {
  return (
    <section className="bg-white font-NUNITO h-auto flex flex-col items-center justify-center sm:h-screen">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src="https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=937&q=80"
            alt=""
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className=" mt-6 text-xl font-medium sm:mb-12">
              Medikids es una organización joven en expansión, creada con el
              sueño de brindar salud infantil a la comunidad. Surge en el año
              2014 de la mano de un equipo de trabajo profesional integral con
              una misma mirada al paciente-familia.
            </p>

            <p className="mt-6 text-xl font-medium sm:mb-12">
              Medikids nace con el objetivo principal de transformar los
              servicios de salud de la medicina actual, brindando una atención
              diferencial, donde se encuentren todas las especialidades
              pediátricas en conjunto, generando confianza y acompañando al
              crecimiento del futuro de la sociedad por medio de la promoción,
              prevención y el bienestar de la salud infantil.
            </p>

            {/* <h3 className="mt-6 text-lg font-medium text-blue-500">
              
            </h3> */}
            {/* <p className="text-gray-600 dark:text-gray-300">
              Founder
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

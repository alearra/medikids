import { Datos } from "../landingpage/Datos";
export const Nosotros = () => {
  return (
    <section className="bg-slate-50 h-auto">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl text-center font-semibold tracking-wide text-pantoneP111 lg:text-4xl">
          Atención Médica Integral y Personalizada
        </h1>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <div>
            <p className="flex items-center text-justify text-gray-900 lg:mx-8">
              Somos una institución que brinda servicios médicos de calidad para
              cuidar y mantener saludable a la comunidad infantil y adolescente.
              Contamos con un completo equipo de profesionales. Nuestro objetivo
              principal es transformar la medicina actual, ofreciendo una
              atención diferencial que integra todas las especialidades
              pediátricas. Nos enorgullece generar confianza y acompañar el
              crecimiento del futuro de la sociedad a través de la promoción,
              prevención y bienestar de la salud.
            </p>
          </div>
        </div>
        <br />
        <Datos />
      </div>
    </section>
  );
};

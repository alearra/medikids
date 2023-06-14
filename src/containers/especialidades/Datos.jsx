import React from "react";
import { FaClinicMedical, FaBaby, FaHandHoldingMedical, FaRegStar} from 'react-icons/fa';


export const DatosEspecialidades = () => {
  return (
    <section className=" w-full p-6 my-6 font-NUNITO">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-md md:space-x-6 bg-slate-50">
          <div className="flex items-center justify-center p-2 align-middle rounded-md sm:p-4 bg-pantoneP346">
          <FaClinicMedical className="text-white text-xl"/>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-pantoneP111">
              27
            </p>
            <p className="text-2xl font-size: 1.25rem; font-medium capitalize">
            Especialidades
            </p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-50">
          <div className="flex items-center justify-center p-2 align-middle rounded-lg sm:p-4 bg-pantoneP346">
            <FaBaby className="text-white text-xl" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-pantoneP111">
              7000
            </p>
            <p className="text-2xl font-size: 1.25rem; font-medium capitalize">
            Pequeños Pacientes
            </p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-md md:space-x-6 bg-slate-50">
          <div className="flex items-center justify-center p-2 align-middle rounded-lg sm:p-4 bg-pantoneP346">
            <FaHandHoldingMedical className="text-white text-xl" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-pantoneP111">
              95
            </p>
            <p className="text-2xl font-size: 1.25rem; font-medium capitalize">
            Profesionales
            </p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-md md:space-x-6 bg-slate-50">
          <div className="flex items-center justify-center p-2 align-middle rounded-lg sm:p-4 bg-pantoneP346">
            <FaRegStar className="text-white text-xl" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-pantoneP111 ">
              30
            </p>
            <p className="text-2xl font-size: 1.25rem; font-medium">
            Años de experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

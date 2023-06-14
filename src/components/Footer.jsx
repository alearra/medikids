import logo from "../assets/static/logo.png";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-white border border-t-slate-200">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img
            className="h-8 w-auto rounded-sm bg-opacity-90 backdrop-blur-sm mr-2"
            src={logo}
            alt="Logo Medikids"
          />
        </a>

        <p className="text-sm text-gray-900">
          © Medikids 2023 by{" "}
          <a className="hover:text-[#592EE1]" href="#">
            ASTRODEV
          </a>
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-900 transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            <AiOutlineInstagram className="w-7 h-7" />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-900 transition-colors duration-30 hover:text-blue-500"
            aria-label="Facebook"
          >
            <AiOutlineFacebook className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

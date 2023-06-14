import { Footer } from "../components/Footer";
import { Quienessomos } from "../containers/nosotros/Quienessomos";
import { Directorio } from "../containers/nosotros/Directorio";
import { Header } from "../containers/header/Header";

export const Nosotros = () => {
  return (
    <div className="bg-white">
      <Header />
      <Quienessomos />
      <Directorio />
      <Footer />
    </div>
  );
};

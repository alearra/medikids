import { Footer } from "../components/Footer";
import { EspecialidadesMenu } from "../containers/especialidades/EspecialidadesMenu";
import { Header } from "../containers/header/Header";

export const Especialidades = () => {
  return (
    <div className="bg-white">
      <Header />
      <EspecialidadesMenu />
      <Footer />
    </div>
  );
};

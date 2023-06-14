import { Footer } from "../components/Footer";
import { Contact } from "../containers/contacto/Contact";
import { Header } from "../containers/header/Header";

export const ContactPage = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <Contact />;
      <Footer />
    </div>
  );
};

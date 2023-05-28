import '../styles/WhatsAppButton.css'
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
    const handleClick = () => {
        const randomNumber = Math.random();
        const phoneNumber = randomNumber < 0.5 ? '+5492615776043' : '+5492613356915';

      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola!`, '_blank');
    };
  
    return (
      <div className="btn-wsp" onClick={handleClick}>
        <BsWhatsapp size={28}/>
      </div>
    );
  };
  
  export default WhatsAppButton;
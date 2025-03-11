import React from "react"
import logo from "/img/Logo.png";
import img1 from "/img/IconFacebook.png";
import img2 from "/img/IconInstagram.png";
import img3 from "/img/IconWhatsapp.png";
import '../styles/Footer.css';


const Footer = () => {
    return (
        <div className="footer-content p-4" style={{ backgroundColor: 'var(--background-footer)' }}>

            <div className="footer-item d-flex flex-column align-items-center text-center">
                <a href="#carouselExampleInterval">
                    <img
                        src={logo}
                        alt="Logo"
                        className="img-fluid logo-footer"
                        style={{ width: '150px', height: 'auto', mixBlendMode: 'multiply' }}
                    />
                </a>
                <p className="text-light mt-2">Horário de funcionamento: <br />10:00hrs à 20:00hrs</p>
            </div>

            <div className="footer-item text-light text-center">
                <h5 className="mt-5">Endereço:</h5>
                <p>Lago Corumbá, Caldas Novas <br/> Goiás, Brasil</p>
            </div>

            <div className="footer-item mt-4 p-3">
                <h5 className="d-flex text-light justify-content-center">Redes sociais:</h5>
                <div className="d-flex gap-2 justify-content-center">
                    <a href="https://www.facebook.com/" target="_blank"><img src={img1} alt="Rede Social 1" className="img-fluid" style={{ width: '50px', height: '50px' }} /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={img2} alt="Rede Social 2" className="img-fluid" style={{ width: '50px', height: '50px' }} /></a>
                    <a href="https://web.whatsapp.com/" target="_blank"><img src={img3} alt="Rede Social 3" className="img-fluid" style={{ width: '50px', height: '50px' }} /></a>
                </div>
            </div>

        </div>


    );
};
export default Footer;
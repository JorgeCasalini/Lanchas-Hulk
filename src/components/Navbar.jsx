import React from "react";
import logo from "/src/assets/Img/Logo.png";
import ButtonContact from "./_ButtonContact";
import "../App.css";


const Navbar = () => (
    <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-0">
            <div className="container-fluid d-flex align-items-center">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <img className="img-fluid" style={{ height: "62px", width: "auto" }} src={logo} alt="Imagem Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex align-items-center mx-4">
                        <a href="#servicos" className="nav-link" to="#">Serviços</a>
                        <a href="#sobre" className="nav-link" to="#">Sobre</a>
                        <a href="#duvidas" className="nav-link" to="#">Dúvidas</a>
                        <ButtonContact/>
                    </div>
                </div>
            </div>
        </nav>


    </>
);

export default Navbar;
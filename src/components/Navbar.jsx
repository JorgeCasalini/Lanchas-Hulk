import React from "react";
import logo from "/img/Logo-Navbar.png";
import ButtonContact from "./_ButtonContact";
import "../App.css";

window.addEventListener("scroll", function () {
    let nav = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.nav-link');

    if(!nav) return;

    if (window.scrollY > 0) {
        nav.classList.add('bg-body-tertiary');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
        });
    } else {
        nav.classList.remove('bg-body-tertiary');
        navLinks.forEach(link => {
            link.classList.add('text-white');
        });
    }
});


const Navbar = () => (
    <>

        <nav className="position-fixed w-100 navbar navbar-expand-lg mt-0" style={{ zIndex: "99999", top: "0", transition: '.5s' }}>
            <div className="container-fluid d-flex align-items-center">
                <a href="#carouselExampleInterval" className="navbar-brand d-flex align-items-center">
                    <img className="img-fluid" style={{ height: "62px", width: "auto" }} src={logo} alt="Imagem Logo" />
                </a>
                <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex align-items-center mx-4">
                        <a href="#atividades" className=" nav-link text-white" to="#">Atividades</a>
                        <a href="#sobre" className="nav-link text-white" to="#">Sobre</a>
                        <a href="#duvidas" className="nav-link text-white" to="#">Dúvidas</a>
                        <ButtonContact />
                    </div>
                </div>
            </div>
        </nav>


    </>
);

export default Navbar;
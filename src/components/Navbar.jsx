import React, { useEffect } from "react";
import logo from "/img/Logo-Navbar.png";
import ButtonContact from "./_ButtonContact";
import "../App.css";

const Navbar = () => {
    useEffect(() => {
        // Função para mudar a cor da navbar no scroll
        const handleScroll = () => {
            let nav = document.querySelector('.navbar');
            let navLinks = document.querySelectorAll('.nav-link');

            if (!nav) return;

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
        };

        // Função para suavizar o scroll e compensar a navbar
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        };

        // Adiciona os event listeners
        window.addEventListener('scroll', handleScroll);
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        // Limpeza
        return () => {
            window.removeEventListener('scroll', handleScroll);
            navLinks.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <nav className="position-fixed w-100 navbar navbar-expand-lg mt-0"
            style={{ zIndex: "1030", top: "0", transition: '.5s' }}>
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <a href="#/" className="navbar-brand d-flex align-items-center">
                    <img className="img-fluid" style={{ height: "62px", width: "auto" }} src={logo} alt="Imagem Logo" />
                </a>
                <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto d-flex align-items-center mx-4">
                        <a href="#roteiros" className="nav-link text-white">Roteiros</a>
                        <a href="#sobre" className="nav-link text-white">Sobre</a>
                        <a href="#duvidas" className="nav-link text-white">Dúvidas</a>
                        <ButtonContact />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
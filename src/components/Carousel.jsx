import React from "react";
import "../App.css";

const Carousel = () => (
    <div className="carousel-container">
        <div
            id="/"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3500"
            data-bs-pause="false"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target=".carousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target=".carousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target=".carousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="./img/Carousel-1.jpg"
                        className="d-block w-100"
                        style={{ height: "31rem", objectFit: "cover" }}
                        alt="Primeira imagem lancha"
                    />
                </div>

                <div className="carousel-item">
                    <img
                        src="./img/Carousel-2.jpg"
                        className="d-block w-100"
                        style={{ height: "31rem", objectFit: "cover" }}
                        alt="Segunda imagem lancha"
                    />
                </div>

                <div className="carousel-item">
                    <img
                        src="./img/Carousel-3.jpg"
                        className="d-block w-100"
                        style={{ height: "31rem", objectFit: "cover" }}
                        alt="Terceira imagem lancha"
                    />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target=".carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target=".carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    </div>
);

export default Carousel;
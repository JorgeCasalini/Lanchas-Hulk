import React, { useEffect, useState } from "react";
import "../App.css";

const images = [
    {
        src: "./img/Carousel-1.webp",
        placeholder: "./img/Carousel-1-small.webp",
        alt: "Primeira imagem lancha",
    },
    {
        src: "./img/Carousel-2.webp",
        placeholder: "./img/Carousel-2-small.webp",
        alt: "Segunda imagem lancha",
    },
    {
        src: "./img/Carousel-3.webp",
        placeholder: "./img/Carousel-3-small.webp",
        alt: "Terceira imagem lancha",
    },
];

const Carousel = () => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        images.forEach((img) => {
            const image = new Image();
            image.src = img.src;
            image.onload = () => {
                setLoadedImages((prev) => [...prev, img.src]);
            };
        });
    }, []);

    return (
        <div className="carousel-container">
            <div
                id="/"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3500"
                data-bs-pause="false"
            >
                <div className="carousel-indicators">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            data-bs-target=".carousel"
                            data-bs-slide-to={idx}
                            className={idx === 0 ? "active" : ""}
                            aria-current={idx === 0 ? "true" : undefined}
                            aria-label={`Slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="carousel-inner">
                    {images.map((img, idx) => {
                        const isLoaded = loadedImages.includes(img.src);

                        return (
                            <div
                                key={idx}
                                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                            >
                                <img
                                    src={isLoaded ? img.src : img.placeholder}
                                    className="d-block w-100"
                                    style={{
                                        height: "31rem",
                                        objectFit: "cover",
                                        filter: isLoaded ? "blur(0px)" : "blur(20px)",
                                        transition: "filter 0.5s ease-out",
                                    }}
                                    alt={img.alt}
                                />
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target=".carousel"
                    data-bs-slide="prev"
                >
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target=".carousel"
                    data-bs-slide="next"
                >
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;

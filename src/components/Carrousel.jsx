import React from "react";


const Carrousel = () => (
    <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ width: "auto", height: "31rem", overflow: "hidden" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1800">
                        <img src="/img/Carrousel-1.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Primeira imagem lancha" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1800">
                        <img src="/img/Carrousel-2.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Segunda imagem lancha" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1800">
                        <img src="/img/Carrousel-3.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Terceira imagem lancha" />
                    </div>
                </div>
            </div>
    </>
);

export default Carrousel;

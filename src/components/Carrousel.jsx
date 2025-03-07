import React from "react";


const Carrousel = () => (
    <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ width: "auto", height: "31rem", overflow: "hidden" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="/src/assets/img/Carrousel-1.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Primeira imagem lancha" />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="/src/assets/img/Carrousel-2.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Segunda imagem lancha" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/src/assets/img/Carrousel-3.jpg" className="w-100 h-auto object-fit-cover"
                            style={{ maxHeight: "31rem" }} alt="Terceira imagem lancha" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </>
);

export default Carrousel;

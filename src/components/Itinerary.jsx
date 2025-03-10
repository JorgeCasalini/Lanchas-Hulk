import React from "react";
import '../assets/styles/Itinerary.css';

const Itinerary = () => (
    <>
        <div className="w-100 overflow-hidden"  style={{ backgroundColor: "#f2f2f2" }}>
            <h1 className="pt-4 px-3 px-md-5 px-lg-7 title-KoPub" data-aos="fade-up" data-aos-duration="1000">
                Roteiros
            </h1>

            {/* Primeira linha */}
            <div className="mt-3 row align-items-center">
                <div className="col-12 col-md-3 d-flex justify-content-center" data-aos="zoom-in-right" data-aos-duration="2000">
                    <img
                        src="./src/assets/img/ImgLancha.jpg"
                        className="icon img-fluid rounded"
                        alt="Icon lancha"
                        style={{ maxWidth: "100px", height: "auto" }}
                    />
                </div>

                <div className="col-12 col-md-8 mx-auto">
                    <p className="text-itinerary m-2 text-center text-md-start text-md-justify" data-aos="fade-up-left" data-aos-duration="1500">
                        Passeio pelo Lago Corumbá, com paradas para nadar e pescar. Visita à Represa de Corumbá IV,
                        almoço em restaurante à beira do lago e opcional visita à Represa do Descoberto. Retorno ao porto.
                        Dicas: Usar protetor solar e roupas confortáveis.
                    </p>
                </div>
            </div>

            {/* Segunda linha */}
            <div className="mt-3 row align-items-center">
                <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start mx-auto" data-aos="fade-up-right" data-aos-duration="1500">
                    <p className="text-itinerary m-2 text-center text-md-start text-md-justify">
                    Aventure-se em um emocionante passeio de jet ski pelas águas do Lago Corumbá, em Caldas Novas. Sinta a adrenalina enquanto desliza sobre as águas cristalinas, aproveitando paisagens incríveis e momentos inesquecíveis de diversão e liberdade.
                    </p>
                </div>

                <div className="col-12 col-md-3 d-flex justify-content-center" data-aos="zoom-in-left" data-aos-duration="2000">
                    <img
                        src="./src/assets/img/ImgJetSki.jpg"
                        className="icon img-fluid rounded"
                        alt="Icon lancha"
                        style={{ maxWidth: "100px", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    </>
);

export default Itinerary;

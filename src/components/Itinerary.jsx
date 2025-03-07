import React from "react";
import '../assets/styles/Itinerary.css'

const Itinerary = () => (
        <>
            <div className="w-100 overflow-hidden" style={{ backgroundColor: "#f2f2f2" }}>
                <h1 className="pt-4 px-3 px-md-5 px-lg-7 title-KoPub text-center">
                    Roteiros
                </h1>

                <div className="mt-3 row align-items-center">
                    <div className="col-md-3 d-flex justify-content-center">
                        <img
                            src="./src/assets/img/ImgLancha.jpg"
                            className="icon img-fluid rounded"
                            alt="Icon lancha"
                            style={{ maxWidth: "100px", height: "auto" }}
                        />
                    </div>

                    <div className="col-md-8">
                        <p className="text-itinerary m-2">
                            Passeio pelo Lago Corumbá, com paradas para nadar e pescar. Visita à Represa de Corumbá IV,
                            almoço em restaurante à beira do lago e opcional visita à Represa do Descoberto. Retorno ao porto.
                            Dicas: Usar protetor solar e roupas confortáveis.
                        </p>
                    </div>

                </div>
                <div className="mt-3 row align-items-center">
                    <div className="ms-5 col-md-8">
                        <p className="text-itinerary m-2 ms-5">
                            Passeio pelo Lago Corumbá, com paradas para nadar e pescar. Visita à Represa de Corumbá IV,
                            almoço em restaurante à beira do lago e opcional visita à Represa do Descoberto. Retorno ao porto.
                            Dicas: Usar protetor solar e roupas confortáveis.
                        </p>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center">
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

export default Itinerary
    ;

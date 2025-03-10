import React from "react";

const Doubts = ({ perguntasFrequentes }) => {
    return (
        <div className="container my-5">
            <h1 id="duvidas" className="title-KoPub mb-4">Perguntas Frequentes</h1>
            <div className="accordion" id="faqAccordion">
                {perguntasFrequentes.length > 0 ? (
                    perguntasFrequentes.map((item) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq${item.id}`}
                                    style={{ outline: 'none !important', boxShadow: 'none !important', backgroundColor: 'transparent' }}
                                >
                                    {item.pergunta}
                                </button>
                            </h2>
                            <div
                                id={`faq${item.id}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {item.resposta}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-Ligconsolata">Nenhuma pergunta encontrada.</p>
                )}
            </div>
        </div>
    );
};

export default Doubts;
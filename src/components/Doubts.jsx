import React from "react";

const Doubts = () => {
  return (
    <div id="duvidas" className="container my-5">
      <h1 className="title-KoPub mb-4" data-aos="fade-up" data-aos-duration="1000">Perguntas Frequentes</h1>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              Quem pilota a lancha?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Nossas lanchas são conduzidas por marinheiros nativos, profissionais e capacitados.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              Podemos levar alimentos e bebidas?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Sim, nossos clientes podem ficar à vontade para levar o tanto de comida e bebida que desejarem.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              Onde nós embarcamos?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Os embarques ocorrem em hotéis à beira do rio Corumbá ou em parques aquáticos da região.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              Quais os itinerários disponíveis?
            </button>
          </h2>
          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Temos dois itinerários:
              <ul>
                <li>
                  <strong>Lago Corumbá e Cachoeiras –</strong> O passeio percorre as águas do Lago Corumbá, com paradas para banho em pontos estratégicos e visita a belas cachoeiras acessíveis por trilhas curtas, proporcionando contato direto com a natureza.
                </li>
                <li>
                  <strong>Ilhas e Mirantes Naturais – </strong>Esse roteiro inclui a navegação pelo lago, passando por ilhotas paradisíacas e mirantes naturais com vistas panorâmicas incríveis, além de paradas para mergulho e momentos de relaxamento à beira da água.
                </li>
              </ul>
              Ambos itinerários fazem diversas paradas nos principais pontos turísticos da região.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              O que está incluso no passeio?
            </button>
          </h2>
          <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Marinheiro devidamente habilitado, colete salva-vidas, utensílios e taças, combustível, churrasqueira com carvão, cooler, sistema de som via Bluetooth e pendrive.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
              style={{ boxShadow: "none", outline: "none", backgroundColor:"transparent" }}
            >
              Vocês oferecem passeios em Rio Quente?
            </button>
          </h2>
          <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Sim, oferecemos passeios exclusivos de lancha e jet ski em Rio Quente, proporcionando uma experiência única e emocionante nas águas cristalinas da região.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubts;

import React from "react";
import ButtonDescription from "./_ButtonDescription";
import '../styles/Card.css';

const Card = ({ imagem, nome, descricao, preco }) => {
  return (
    <div className="cardcard d-flex flex-column h-100">
      <img
        src={imagem}
        className="card-img-top"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        alt={nome}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5
          className="card-title card-name-product text-center fw-medium"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          style={{ color: 'var(--color-Ligconsolata)' }}
        >
          {nome}
        </h5>
        <p className="card-text text-center">{descricao.slice(0, 106) + "..."}</p>
        <p className="card-text price text-center fw-medium">Valor: R${preco}</p>
        <div className="mt-auto">
          <ButtonDescription
            imagem={imagem}
            nome={nome}
            descricao={descricao}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

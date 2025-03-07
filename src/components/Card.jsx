import React from "react";
import ButtonReservation from "./ButtonReservation";

const Card = ({ imagem, nome, descricao, preco }) => {
    return (
        <div className="cardcard d-flex flex-column h-100">
            <img src={imagem} className="card-img-top" alt={nome} style={{ height: '200px', objectFit: 'cover' }}/>
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{descricao.slice(0, 130) + "..."}</p>
                <p className="card-text">Valor: R${preco}</p>
                <ButtonReservation />
            </div>
        </div>
    )
};

export default Card;
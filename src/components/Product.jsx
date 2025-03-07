import React from 'react';
import Card from './Card';

const Product = ({ lanchasJetSki }) => {
  return (
    <div className="container">
      <h1>Nossas Lanchas e Jet Skis</h1>
      <div className="row">
        {lanchasJetSki.length > 0 ? (
          lanchasJetSki.map((lancha) => (
            <div className="col-12 col-md-4" key={lancha.id}>
              <div className="card">
                <Card
                imagem = {lancha.imagem + lancha.id + ".png"}
                nome = {lancha.nome}
                descricao = {lancha.descricao}
                preco = {lancha.preco} />
              </div>
            </div>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </div>
  );
};

export default Product;

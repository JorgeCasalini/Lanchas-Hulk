import React from 'react';
import Card from './Card';

const Product = ({ lanchasJetSki }) => {
  return (
    <div id='atividades' className="container mt-4">
      <h1 className="title-KoPub" data-aos="fade-up" data-aos-duration="1000">Nossas Lanchas e Jet Skis</h1>
      <div className="row d-flex justify-content-between">
        {lanchasJetSki.length > 0 ? (
          lanchasJetSki.map((lancha) => (
            <div className="col-12 col-md-4 mb-4 mt-4" key={lancha.id}>
              <div className="card h-100" style={{backgroundColor:'#f1f1f1', border:'none'}}>
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

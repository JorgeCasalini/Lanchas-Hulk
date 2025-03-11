import React, { useState } from 'react';
import Modal from './_Modal'; // Importando o Modal

const ButtonDescription = ({ imagem, nome, descricao }) => {
  const [showModal, setShowModal] = useState(false);  // Controla se o modal é mostrado ou não
  const [modalContent, setModalContent] = useState({ imagem: '', nome: '', descricao: '' });

  // Função para abrir o modal e passar as informações
  const openModal = () => {
    setModalContent({ imagem, nome, descricao });  // Passa as informações para o modal
    setShowModal(true);  // Mostra o modal
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);  // Fecha o modal
    setModalContent({ imagem: " ", nome: " ", descricao: " " }); // Limpa as informações do modal
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success ms-2 d-flex align-items-center justify-content-center w-100"
        onClick={openModal}  // Abre o modal com as informações
      >
        Descrição
      </button>

      {/* Modal com as informações */}
      {showModal && (
        <Modal
          imagem={modalContent.imagem}
          nome={modalContent.nome}
          descricao={modalContent.descricao}
          onClose={closeModal} // Passa a função de fechar o modal
        />
      )}
    </>
  );
};

export default ButtonDescription;

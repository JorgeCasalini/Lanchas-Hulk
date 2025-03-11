import React, { useEffect, useRef } from 'react';

const Modal = ({ imagem, nome, descricao, onClose }) => {
    const modalRef = useRef(null); // Referência para o modal

    useEffect(() => {
        const modalElement = document.querySelector('.modal');

        // Garantir que o modal está em foco ao abrir
        if (modalElement) {
            modalElement.focus();
        }

        // Impedir o rolar da página quando o modal estiver aberto
        document.body.style.overflow = 'hidden';
        
        // Limpando quando o modal for fechado
        return () => {
            document.body.style.overflow = '';  // Restaurando o scroll
        };
    }, []);

    // Função para fechar o modal ao clicar fora dele
    const handleOutsideClick = (e) => {
        // Verifica se o clique foi fora da área do modal (da camada escura)
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();  // Chama a função de fechamento
        }
    };

    return (
        <>
            <div
                className="modal-overlay" // Camada de fundo escura
                onClick={handleOutsideClick} // Fechar ao clicar fora
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Camada escura
                    zIndex: 1040, // Coloca atrás do modal
                }}
            />
            <div
                className="modal fade show"
                tabIndex="-1"
                aria-labelledby="ReservationModalLabel"
                style={{
                    display: 'block',
                    zIndex: 999999, // Modal na frente da camada escura
                }}
                ref={modalRef} // Adicionando a referência ao modal
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={imagem} alt={nome} style={{ maxWidth: '150px', objectFit: 'cover' }} />
                            <h2 className=" title-KoPub" id="ReservationModalLabel">{nome}</h2>
                            <button
                                type="button"
                                className="btn-close position-absolute top-0 end-0 m-2"
                                aria-label="Close"
                                onClick={onClose} // Chamando a função de fechar o modal
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>{descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

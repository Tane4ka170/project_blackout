import React from 'react';

const Modal = ({ children, closeModal }) => {
  const removeListener = () => {
    document.removeEventListener('keydown', onEscKeyPress);
  };

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
      removeListener();
    }
  };

  const onEscKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
      removeListener();
    }
  };

  document.addEventListener('keydown', onEscKeyPress);

  return (
    <div onClick={onBackDropClick}>
      <button></button>
      <div></div>
    </div>
  );
};

export default Modal;

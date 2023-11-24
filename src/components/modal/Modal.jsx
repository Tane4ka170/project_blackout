import ReactDOM from 'react-dom';
import React, { useCallback, useEffect } from 'react';
import toast from 'react-toastify';

const rootModal = document.querySelector('#modal');

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
        toast.info('Modal closed by Escape');
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackDrop}>
      <button onClick={closeModal}></button>
      <div>{children}</div>
    </div>,
    rootModal
  );
};

// export default Modal;

// import { useModal } from 'components/hooks/useModal';

// const { isOpen, openModal, closeModal } = useModal();

// <div>
//   <button onClick={openModal}>open</button>
//   {isOpen ? <Modal closeModal={closeModal} /> : null}
// </div>;
// Передати ці значення на Header кнопка UserSettings!!!!

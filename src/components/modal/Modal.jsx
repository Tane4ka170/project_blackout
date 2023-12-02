import ReactDOM from 'react-dom';
import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

import {
  CloseButton,
  ContentWrapper,
  StyledSvgUser,
  StyledWrapper,
} from './Modal.styled';
import Symbols from 'images/svg/Symbols';

const rootModal = document.querySelector('#modal');

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    e => {
      console.log(e);
      if (e.key === 'Escape') {
        closeModal();
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
    <StyledWrapper onClick={handleBackDrop}>
      <motion.div
        initial={{ x: '100%', y: '-100%' }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        exit={{ x: '100%', y: '-100%' }}
      >
        <ContentWrapper>
          <CloseButton onClick={closeModal}>
            <Symbols />
            <StyledSvgUser width={24} height={24}>
              <use xlinkHref="#icon-close" />
            </StyledSvgUser>
          </CloseButton>
          {children}
        </ContentWrapper>
      </motion.div>
    </StyledWrapper>,
    rootModal
  );
};

export default Modal;

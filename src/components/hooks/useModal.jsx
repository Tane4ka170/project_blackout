import { useState } from 'react';

export const useModal = () => {
  const [isOpened, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpened, openModal, closeModal };
};

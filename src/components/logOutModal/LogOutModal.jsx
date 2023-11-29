import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutThunk } from 'redux/auth/operations';

import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from './LogOutModal.Styled';

const LogOutModal = ({ closeModal, setHideOrShow, setHideOrShowList }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnClickLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        setHideOrShowList(prev => ({ display: 'none' }));
        closeModal();
        setHideOrShow({
          display: 'none',
        });
        navigate('/login');
      });
  };

  return (
    <StyledLogOutWrapper>
      <StyledLogOutText>Are you sure you want to log out?</StyledLogOutText>
      <StyledLogOutButtonWrapper>
        <StyledLogOutButton onClick={handleOnClickLogout}>
          Log out
        </StyledLogOutButton>
        <StyledLogOutButton onClick={closeModal}>Cancel</StyledLogOutButton>
      </StyledLogOutButtonWrapper>
    </StyledLogOutWrapper>
  );
};
export default LogOutModal;

import React from 'react';

import { logoutThunk } from 'redux/auth/operations';

import { useDispatch } from 'react-redux';
import { useModal } from 'components/hooks/useModal';
import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from './LogOutModal.Styled';

const LogOutModal = () => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  return (
    <StyledLogOutWrapper>
      <StyledLogOutText>Are you sure you want to log out?</StyledLogOutText>
      <StyledLogOutButtonWrapper>
        <StyledLogOutButton onClick={() => dispatch(logoutThunk())}>
          Log out
        </StyledLogOutButton>
        <StyledLogOutButton onClick={closeModal}>Cancel</StyledLogOutButton>
      </StyledLogOutButtonWrapper>
    </StyledLogOutWrapper>
  );
};
export default LogOutModal;

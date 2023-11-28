import React from 'react';
import { logoutThunk } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import {
  StyledLogOutButton,
  StyledLogOutButtonWrapper,
  StyledLogOutText,
  StyledLogOutWrapper,
} from './LogOutModal.Styled';

const LogOutModal = ({ closeModal, setHideOrShow, setHideOrShowList }) => {
  const dispatch = useDispatch();
  return (
    <StyledLogOutWrapper>
      <StyledLogOutText>Are you sure you want to log out?</StyledLogOutText>
      <StyledLogOutButtonWrapper>
        <StyledLogOutButton
          onClick={() =>
            dispatch(logoutThunk())
              .unwrap()
              .then(() => {
                setHideOrShowList(prev => ({ display: 'none' }));
                closeModal();
                setHideOrShow({
                  display: 'none',
                });
              })
          }
        >
          Log out
        </StyledLogOutButton>
        <StyledLogOutButton onClick={closeModal}>Cancel</StyledLogOutButton>
      </StyledLogOutButtonWrapper>
    </StyledLogOutWrapper>
  );
};
export default LogOutModal;

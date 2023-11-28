import styled, { css } from 'styled-components';

export const SubmitForm = styled.form`
  @media (max-width: 767px) {
    margin: 0px 20px;
  }

  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 420px;
  position: relative;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  @media (max-width: 767px) {
    font-size: 14px;
    padding-left: 14px;
  }

  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  border-radius: 12px;
  background: #171719;
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  font-style: normal;
  line-height: 1.5;
  border: 1px solid rgba(250, 250, 250, 0.2);

  &:focus {
    border: 1px solid #0ef387;
    ${({ $error }) =>
      $error &&
      css`
        border: 1px solid red;
      `}
  }
  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

export const InputTitleP = styled.p`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  color: #0ef387;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02em;
  ${({ $error }) =>
    $error &&
    css`
      color: #e74a3b;
    `}
`;

export const EditButton = styled.button`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  position: absolute;
  right: 0%;
  bottom: 0%;
  border-radius: 12px;
  background: #0ef387;
  padding: 15px 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c0d0d;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02em;

  ${({ $error }) =>
    $error &&
    css`
      background-color: #e74a3b;
    `}

  &:hover,
  &:focus {
    background: #0ebb69;

    ${({ $error }) =>
      $error &&
      css`
        background-color: #b83326;
      `}
  }
`;

export const CancelButton = styled.button`
  @media (max-width: 767px) {
    font-size: 14px;
  }

  position: absolute;
  right: 0%;
  bottom: 75%;
  display: flex;
  background: transparent;
  justify-content: center;
  align-items: center;
  color: #e74a3b;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.02em;

  &::before {
    opacity: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: #e74a3b;
    transition: opacity 0.3s;
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 1;
    }
  }
`;

export const StyledErrorP = styled.p`
  color: #e74a3b;
  position: absolute;
  top: 114%;
  left: 30%;
  font-size: 12px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    left: 34%;
    font-size: 14px;
  }
`;

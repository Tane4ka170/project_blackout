import styled from 'styled-components';

export const StyledInput = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 40px;
  padding-left: 12px;
  border-radius: 12px;
  width: 335px;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;
    &.valid {
      border-color: #0ef387;
    }
    &.invalid {
      border-color: #e74a3b;
    }
    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }
    &:hover {
      border-color: #0ef387;
    }

    &:not(:focus):not(:placeholder-shown):valid {
      border-color: #0ef387; /* Зелений колір бордера, коли значення валідне, але не в фокусі і не placeholder */
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #e74a3b; /* Червоний колір бордера, коли значення невалідне, але не в фокусі і не placeholder */
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.4);
      font-family: Suisse Intl;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 128.571% */
      @media (min-width: 768px) and (max-width: 1439.8px) {
        font-size: 16px;
      }

      @media (min-width: 1440px) {
        font-size: 16px;
      }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fafafa !important;
      caret-color: #fafafa !important;
    }
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 399px;
    font-size: 16px;
  }
`;

export const ButtonSign = styled.button`
  display: inline-flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  background: #0ef387;
  color: #0c0d0d;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }

  &:hover {
    border-radius: 40px;
    background: #0ebb69;
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-top: 20px;
`;

export const WrapBt = styled.div`
  margin-top: 50px;
`;

export const WrapInp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const WrapInPass = styled.div`
  position: relative;
  width: 335px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
  }

  @media (min-width: 1440px) {
    width: 399px;
  }
`;

export const StyledPasswordInput = styled.input`
  width: 335px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 40px;
  padding-left: 12px;
  border-radius: 12px;
  background-color: #0c0d0d;
  color: rgba(250, 250, 250, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.2);
  outline: none;
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  &:not(:focus):not(:placeholder-shown):invalid {
    border-color: #e74a3b;
  }

  &:not(:focus):not(:placeholder-shown):valid {
    border-color: #0ef387;
  }

  &:focus {
    border-color: #0ef387;
    color: #fafafa;
  }

  &::placeholder {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    @media (min-width: 768px) and (max-width: 1439.8px) {
      font-size: 16px;
    }

    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fafafa !important;
    caret-color: #fafafa !important;
  }

  &.empty {
    border-color: rgba(250, 250, 250, 0.2);

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }
  }

  &.invalid {
    border-color: #e74a3b !important;

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #e74a3b !important;
    }
  }

  &.valid {
    border-color: #0ef387;
  }

  &:not(:focus):hover {
    border-color: ${({ className }) =>
      className && className.includes('invalid') ? '#e74a3b' : '#0ef387'};
  }
  @media (min-width: 768px) and (max-width: 1439.8px) {
    width: 399px;
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    width: 399px;
    font-size: 16px;
  }
`;

export const PasswordToggle = styled.button`
  /* ваші стилі для кнопки показу/приховування пароля тут */
  display: flex;
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(250, 250, 250, 0.6);
  cursor: pointer;
  font-size: 14px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    right: 18px;
  }

  @media (min-width: 1440px) {
    right: 18px;
  }
`;

export const WrapPassword = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
`;

export const Err = styled.p`
  font-size: 12px;
  color: #e74a3b;
  margin-top: 5px;
  padding-left: 12px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  color: rgba(250, 250, 250, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  &.span {
    color: #fafafa;
  }
`;
export const Spn = styled.div`
  color: #fafafa;
  text-decoration: underline;
`;
export const PasswordMessage = styled.p`
  font-size: 12px;
  /* color: #0ef387; */
  color: ${props => (props.$isGood ? '#0ef387' : '#E74A3B')};
  margin-top: 5px;
  padding-left: 12px;
`;
export const ImgAuth = styled.img`
  display: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
    width: 611px;
    height: 568px;
  }
`;

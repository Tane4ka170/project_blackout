import styled from 'styled-components';

export const StyledInputPass = styled.input`
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }

    &:not(:focus):not(:placeholder-shown):valid {
      border-color: #0ef387; /* Зелений колір бордера, коли значення валідне, але не в фокусі і не placeholder */
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #ff4d4f; /* Червоний колір бордера, коли значення невалідне, але не в фокусі і не placeholder */
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.6);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      background-color: #0c0d0d !important;
      color: rgba(250, 250, 250, 0.4) !important;

      /* Додайте стилі для кольору точок під час автозаповнення */
      &::first-line {
        color: rgba(250, 250, 250, 0.4);
      }

      &::after {
        content: '•'; /* Замініть це на символ, який ви хочете використовувати для точок */
        color: rgba(250, 250, 250, 0.4);
      }
    }
  }
`;

export const StyledInput = styled.input`
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }

    &:not(:focus):not(:placeholder-shown):valid {
      border-color: #0ef387; /* Зелений колір бордера, коли значення валідне, але не в фокусі і не placeholder */
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #ff4d4f; /* Червоний колір бордера, коли значення невалідне, але не в фокусі і не placeholder */
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.6);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      background-color: #0c0d0d !important;
      color: rgba(250, 250, 250, 0.4) !important;

      /* Додайте стилі для кольору точок під час автозаповнення */
      &::first-line {
        color: rgba(250, 250, 250, 0.4);
      }

      &::after {
        content: '•'; /* Замініть це на символ, який ви хочете використовувати для точок */
        color: rgba(250, 250, 250, 0.4);
      }
    }
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
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;

  &:hover {
    border-radius: 40px;
    background: #0ebb69;
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;

export const WrapBt = styled.div`
  margin-top: 50px;
`;

export const WrapInp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledPasswordInput = styled.input`
  && {
    background-color: #0c0d0d;
    color: rgba(250, 250, 250, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.2);
    outline: none;
    position: relative;

    &:focus {
      border-color: #0ef387;
      color: #fafafa;
    }

    &:not(:focus):not(:placeholder-shown):valid {
      border-color: #0ef387; /* Зелений колір бордера, коли значення валідне, але не в фокусі і не placeholder */
    }

    &:not(:focus):not(:placeholder-shown):invalid {
      border-color: #ff4d4f; /* Червоний колір бордера, коли значення невалідне, але не в фокусі і не placeholder */
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.6);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      background-color: #0c0d0d !important;
      color: rgba(250, 250, 250, 0.4) !important;

      /* Додайте стилі для кольору точок під час автозаповнення */
      &::first-line {
        color: rgba(250, 250, 250, 0.4);
      }

      &::after {
        content: '•'; /* Замініть це на символ, який ви хочете використовувати для точок */
        color: rgba(250, 250, 250, 0.4);
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }
    border-color: ${props =>
      props.hasError ? '#ff4d4f' : 'rgba(250, 250, 250, 0.2)'};
  }
`;

export const PasswordToggle = styled.button`
  /* ваші стилі для кнопки показу/приховування пароля тут */
  display: flex;
  /* position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%); */
  background: none;
  border: none;
  color: rgba(250, 250, 250, 0.6);
  cursor: pointer;
  font-size: 16px;
`;

export const WrapPassword = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Err = styled.p`
  color: red;
`;

export const Line = styled.span`
  color: rgba(250, 250, 250, 0.6);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

import styled from 'styled-components';

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 335px;
  height: auto;

  @media (min-width: 768px) {
    gap: 15px;
    width: 532px;
  }
  @media (min-width: 1440px) {
    width: 516px;
  }
`;

export const H2 = styled.h2`
  color: #fafafa;

  font-family: Suisse Intl;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media (min-width: 768px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }

  @media (min-width: 1440px) {
    color: #fafafa;

    font-family: Suisse Intl;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.76px;
  }
`;

export const PH = styled.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media (min-width: 768px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);

    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

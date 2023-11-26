import styled from 'styled-components';

export const DIVL = styled.div`
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

export const DIVTR = styled.div`
  width: 335px;
  height: 516px;
  flex-shrink: 0;
  padding: 20px 0;
  flex-direction: column;

  border-radius: 30px;
  background: #171719;

  @media (min-width: 768px) {
    width: 704px;
    height: 544px;

    padding: 32px 0;
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    width: 1240px;
    height: 439px;
    padding: 20px 0;
  }
`;

export const DIVR = styled.div`
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

export const DIVMAIN = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  margin-bottom: 40px;
  margin-top: 66px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 59px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
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

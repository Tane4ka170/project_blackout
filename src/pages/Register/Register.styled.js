import styled from 'styled-components';

export const WrapForm = styled.div`
  margin-left: 0;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    max-width: 399px;
    margin-left: 0;
  }

  @media (min-width: 1440px) {
    margin-left: 54px;
  }
`;
export const WrapperS = styled.div`
  padding-top: 113px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;

  background: #0c0d0d;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    flex-direction: column-reverse;
    padding-top: 191px;
    padding-left: 185px;
    padding-right: 184px;
    padding-bottom: 20px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    padding-top: 56px;
    padding-left: 185px;
    padding-right: 184px;
    padding-bottom: 20px;
  }
`;
export const Texts = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  max-width: 335px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }

  @media (min-width: 1440px) {
    color: rgba(250, 250, 250, 0.4);
    font-family: Suisse Intl;
    font-size: 16px;
    letter-spacing: -0.32px;
    max-width: 533px;
  }
`;
export const PlugDivs = styled.div`
  position: relative;
`;
export const TableDivs = styled.div`
  position: absolute;
  top: 240px;
  left: -10px;
  width: 248px;
  height: 81px;
  @media (max-width: 768.8px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
    top: 315px;
    left: -16px;
  }

  @media (min-width: 1440px) {
    top: 315px;
    left: -50px;
    width: 303px;
    height: 121px;
  }
`;

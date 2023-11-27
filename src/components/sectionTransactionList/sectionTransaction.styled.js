import styled from 'styled-components';

export const DIV = styled.div`
  display: flex;

  margin-bottom: 32px;
  padding: 20px 0;

  background: rgba(0, 0, 0, 0.2);

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`;

export const P1 = styled.p`
  width: 53px;
  margin: 0 20px 0 20px;
  @media (min-width: 768px) {
    width: auto;
    margin: 0 41px 0 32px;
  }
  @media (min-width: 1440px) {
    margin: 0 89px 0 40px;
  }
`;

export const P2 = styled.p`
  width: 60px;

  margin-right: 10px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 46px;
  }
  @media (min-width: 1440px) {
    margin-right: 120px;
  }
`;

export const P3 = styled.p`
  width: 30px;
  margin-right: 36px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 65px;
  }
  @media (min-width: 1440px) {
    margin-right: 163px;
  }
`;

export const P4 = styled.p`
  width: 30px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    margin-right: 99px;
  }
`;

export const P5 = styled.p`
  width: 30px;
  margin-right: 80px;
  @media (min-width: 768px) {
    width: auto;
    margin-right: 102px;
  }
  @media (min-width: 1440px) {
    margin-right: 154px;
  }
`;

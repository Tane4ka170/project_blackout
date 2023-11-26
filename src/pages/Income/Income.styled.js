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

export const ULL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: 1440px) {
  }
`;

export const LI = styled.li`
  width: 335px;
  height: 81px;
  @media (min-width: 768px) {
    width: 340px;
    height: 121px;
  }
  @media (min-width: 1440px) {
    width: 303px;
    height: 121px;
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

export const DIV = styled.div`
  display: flex;

  margin-bottom: 14px;
  align-items: center;

  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
  }
`;

export const P1 = styled.p`
  width: 92px;
  margin: 0 20px 0 20px;
  @media (min-width: 768px) {
    margin: 0 41px 0 32px;
  }
  @media (min-width: 1440px) {
    width: 97px;
    margin: 0 60px 0 40px;
  }
`;

export const P2 = styled.p`
  margin-right: 14px;
  @media (min-width: 768px) {
    margin-right: 46px;
  }
  @media (min-width: 1440px) {
    width: 120px;
    margin-right: 74px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const P3 = styled.p`
  margin-right: 39px;
  @media (min-width: 768px) {
    margin-right: 65px;
  }
  @media (min-width: 1440px) {
    width: 130px;
    margin-right: 70px;
  }
`;

export const P4 = styled.p`
  margin-right: 22px;
  @media (min-width: 768px) {
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 54px;
    margin-right: 84px;
  }
`;

export const P5 = styled.p`
  margin-right: 25px;
  @media (min-width: 768px) {
    margin-right: 102px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    margin-right: 90px;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  margin-right: 8px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    padding: 14px 30px;

    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const DelBtn = styled.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;

  @media (min-width: 768px) {
    padding: 14px 30px;
  }
  @media (min-width: 1440px) {
    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 8px;
  }
`;

export const TransactionsContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 238px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 150px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
  }
`;

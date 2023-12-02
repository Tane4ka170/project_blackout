import styled from 'styled-components';

export const MainWr = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) and (max-width: 1439.8px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 50px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DIVL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 335px;

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

export const DIV375 = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 767.98px) {
    width: 335px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 121px;

    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    position: absolute;
    top: 20px;
  }
  &::-webkit-scrollbar-track {
    width: 8px;
    height: 295px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
  }

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`;

export const DIVTR = styled.div`
  width: 335px;
  height: 516px;

  background: #171719;

  padding: 20px 0;
  flex-direction: column;
  border-radius: 30px;
  background: #171719;

  @media (min-width: 768px) {
    overflow-y: hidden;
    overflow-x: hidden;
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
  width: 59px;
  margin: 0 14px 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 83px;
    margin: 0 31px 0 32px;
  }
  @media (min-width: 1440px) {
    width: 97px;
    margin: 0 60px 0 40px;
  }
`;

export const P2 = styled.p`
  width: 56px;
  margin-right: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 89px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 120px;
    margin-right: 74px;
  }
`;

export const P3 = styled.p`
  width: 56px;
  margin-right: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 74px;
    margin-right: 26px;
  }
  @media (min-width: 1440px) {
    width: 130px;
    margin-right: 70px;
  }
`;

export const P4 = styled.p`
  width: 38px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 52px;
    margin-right: 25px;
  }
  @media (min-width: 1440px) {
    width: 54px;
    margin-right: 84px;
  }
`;

export const P5 = styled.p`
  width: 90px;
  margin-right: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    width: 96px;
    margin-right: 40px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    margin-right: 90px;
  }
`;

export const PEr = styled.p`
  color: rgba(250, 250, 250, 0.4);

  font-family: Suisse Intl;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    font-size: 22px;
    width: auto;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
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
  transition: background-color 250ms ease-in-out;

  /* Скрыть текст при ширине экрана до 1440px */
  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`;

export const DelBtn = styled.button`
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;

  background: #0c0d0d;

  border-radius: 40px;
  transition: background-color 250ms ease-in-out;

  stroke: white;
  fill: transparent;
  &:hover {
    stroke: black;
  }

  @media (max-width: 1440px) {
    span {
      display: none;
    }
  }

  &:hover {
    background-color: #0ef387;
  }

  @media (min-width: 1440px) {
    padding: 14px 30px;
    gap: 10px;

    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    margin-right: 8px;

    span {
      display: inline-block;
    }

    &:hover {
      color: #0c0d0d;
    }
  }
`;

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 245px;

  &::-webkit-scrollbar {
    width: 8px;
    margin-right: 20px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 150px;
    border-radius: 12px;
    background: rgba(250, 250, 250, 0.2);
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 230px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 238px;
    width: 1240px;
    margin-right: 20px;
  }
`;

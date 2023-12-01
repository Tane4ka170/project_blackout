import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 335px;
  height: 471px;
  padding: 28px 22px 0 21px;
  border-radius: 30px;
  background: #171719;
  color: rgba(250, 250, 250, 0.5);

  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    width: 704px;
    height: 302px;
    display: flex;
    flex-direction: column;
    gap: 37px;
  }

  @media only screen and (min-width: 1440px) {
    width: 630px;
    height: 302px;
    display: flex;
    flex-direction: column;
    gap: 37px;
    padding: 40px 40px 0 40px;
  }
`;

export const TitleStyled = styled.p`
  margin-bottom: 55px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    color: rgba(250, 250, 250, 0.5);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const DoughnutWrapper = styled.div`
  width: 292px;
  height: 142px;
`;

export const ListWrapper = styled.div`
  width: 292px;
  max-height: 126px;

  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-color: #444446 #0c0d0d;

  & ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 64px;
    border-radius: 12px;
    background-color: #0c0d0d;
  }
  & ::-webkit-scrollbar-track {
    width: 6px;
    height: 126px;
    border-radius: 12px;
    background-color: #444446;
  }

  @media only screen and (min-width: 1440px) {
    width: 217px;
  }
`;

export const ListStyled = styled.ul`
  width: 230px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ItemStyled = styled.li`
  width: 269px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 8px;

  & ::before {
    content: '•';
    color: ${props => props.color || 'black'};
    font-size: 30px;
    position: absolute;
    top: -10px;
    left: -10px;
  }

  & p {
    color: rgba(250, 250, 250, 0.5);
    font-family: Suisse Intl;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & p:last-child {
    margin-right: 20px;
    margin-left: auto;
    color: #fafafa;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media only screen and ((min-width: 768px) and (max-width:1439.98px)) {
    width: 269px;
  }

  @media only screen and (min-width: 1440px) {
    width: 191px;
  }
`;

export const StatisticsPlug = styled.p`
  font-size: 16px;
  margin-top: 140px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 40px;
  }
`;

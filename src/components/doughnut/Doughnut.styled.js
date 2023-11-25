import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 335px;
  height: 471px;
  padding: 28px 22px 0 21px;

  border-radius: 30px;
  background: #171719;
  color: rgba(250, 250, 250, 0.5);
`;

export const TitleStyled = styled.p`
  margin-bottom: 55px;

  font-family: Suisse Intl;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const DoughnutWrapper = styled.div`
  width: 292px;
  height: 142px;
`;

export const ListStyled = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  list-style-type: none;
  padding-left: 20px;
`;

export const ListWrapper = styled.div`
  width: 292px;
  max-height: 126px;

  overflow-x: hidden;
  overflow-y: auto;
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
`;

export const ItemStyled = styled.li`
  width: 269px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  position: relative;
  padding-left: 8px;

  & ::before {
    content: '•'; /* Задати бажаний символ для маркера */
    color: red; /* Змінити колір маркера */
    font-size: 30px; /* Задати розмір маркера */
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
`;

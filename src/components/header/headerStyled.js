import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c0d0d;
  padding: 13px 20px;
  color: white;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0c0d0d;
  padding: 13px 20px;
  color: white;
`;
export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  align-items: center;
  padding: 18px 20px;
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #0ef387;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;
export const MenuMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserImgContainer = styled.div`
  border-radius: 30px;
  overflow: hidden;
`;

export const BtnContainer = styled.div`
  display: none;
  flex-direction: column;
  padding: 2px 4px;
  position: absolute;
  z-index: 6;
  top: 68px;
  left: 20px;
  border-radius: 15px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #0c0d0d;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #fafafa;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
`;
export const UserLink = styled(Link)`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SiteIcon = styled.span``;

export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  stroke: white;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  stroke: black;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ProfileBtn = styled.button`
  display: flex;
  align-items: center;
  display: flex;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #171719;
`;

export const ExpensesBtn = styled.button`
  padding: 12px 21px;
  border-radius: 30px;
  background: #0c0d0d;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
`;
export const IncomeBtn = styled.button`
  padding: 12px 21px;
  background: transparent;
  border-radius: 30px;
  border: 1px solid rgba(12, 13, 13, 0.4);
  color: black;
  cursor: pointer;
`;
export const DefaultUserIcon = styled.svg`
  fill: rgba(14, 243, 135, 1);
  padding: 9px 8px;
  border-radius: 50px;
`;
export const UserArrowUp = styled.svg`
  stroke: rgba(14, 243, 135, 1);
  transition: transform 0.3s ease;
`;

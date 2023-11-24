import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #0ef387;
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;
export const MenuMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.36px;
  text-transform: uppercase;
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
  border-radius: 15px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #0c0d0d;
`;

export const UserArrowDown = styled.svg`
  stroke: rgba(14, 243, 135, 1);
`;

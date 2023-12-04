import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UnAuthorisedHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c0d0d;
  padding: 13px 20px;
  color: white;
  @media screen and (min-width: 1440px) {
    padding: 18px 100px;
  }
`;

export const HeaderAuthorised = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0c0d0d;
  padding: 13px 20px;
  color: white;
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
  @media screen and (max-width: 1439px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    padding: 18px 100px;
  }
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
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 385px;
  }
  @media screen and (min-width: 1439.97px) {
    display: none !important;
  }
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

export const UserBarContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  position: absolute;
  z-index: 6;
  top: 75px;
  left: 20px;
  border-radius: 15px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #0c0d0d;
`;
export const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 1439.97px) {
    display: none;
  }
`;

export const ProfileSettingsContainer = styled(motion.div)`
  @media screen and (max-width: 1439.97px) {
    display: none;
  }
`;
export const HeaderProfileSettings = styled.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  position: absolute;
  z-index: 3;
  top: 80px;
  right: 20px;
  border-radius: 15px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: #0c0d0d;
  @media screen and (min-width: 1439px) {
    right: 100px;
  }
  @media screen and (max-width: 1439.97px) {
    display: none !important;
  }
`;

export const DarkBackDrop = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 4;
  height: 100vh;
  background: rgba(12, 13, 13, 0.6);
  @media screen and (min-width: 1439.97px) {
    z-index: -1;
  }
`;

export const HeaderBurgerMenu = styled.div``;

export const UsualBackDrop = styled.div`
  display: none;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

export const HeaderLink = styled(motion(Link))`
  display: flex;
  text-decoration: none;
  color: #fafafa;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.36px;
  text-transform: uppercase;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
  }
  @media screen and (min-width: 1439px) {
    font-size: 20px;
  }
`;
export const UserPanel = styled(Link)`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 12px;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
  }
`;
export const UserPanelLogOut = styled.button`
  text-decoration: none;
  color: rgba(250, 250, 250, 0.5);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  gap: 12px;
  background: transparent;

  cursor: pointer;
  border: none;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
  }
`;
export const SiteIcon = styled.span``;

export const BurgerBtn = styled(motion.button)`
  background-color: transparent;
  border: none;
  stroke: white;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled(motion.button)`
  background-color: transparent;
  border: none;
  stroke: black;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ProfileSettingsBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: #171719;
  z-index: 7;
  /* @media (max-width: 1439.97px) {
    display: none;
  } */
`;

export const ExpensesBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 12px 21px;
  border-radius: 30px;
  background: #0ef387;
  border: 1px solid rgba(12, 13, 13, 0.4);
  color: black;
  cursor: pointer;
  &.active {
    background: #0c0d0d;
    border: 1px solid black;
    color: white;
  }
`;
export const IncomeBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 12px 21px;
  background: #0ef387;
  border-radius: 30px;
  border: 1px solid rgba(12, 13, 13, 0.4);
  color: black;
  cursor: pointer;
  &.active {
    background: #0c0d0d;
    border: 1px solid black;
    color: white;
  }
`;
export const ExpensesLink = styled(motion(NavLink))`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 12px 23px;
  border-radius: 30px;
  background: #0c0d0d;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
    box-shadow: 0 0 5px #0ef387;
  }
  &.active {
    background: #0ef387;
    border: 1px solid #0ef387;
    color: black;
  }
`;
export const IncomeLink = styled(motion(NavLink))`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 12px 23px;
  background: transparent;
  border-radius: 30px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
    text-shadow: 0 0 5px #0ef387;
    box-shadow: 0 0 5px #0ef387;
  }
  &.active {
    background: #0ef387;
    border: 1px solid #0ef387;
    color: black;
  }
`;
export const DefaultUserIcon = styled.svg`
  fill: rgba(14, 243, 135, 1);
  padding: 9px 8px;
  border-radius: 50px;
  height: 42.2px;
  width: 42px;
`;
export const UserArrowUp = styled.svg`
  stroke: rgba(14, 243, 135, 1);
  transition: transform 0.3s ease;
`;
export const UserPanelIcons = styled.svg`
  stroke: rgba(131, 131, 131, 1);
`;

export const UserName = styled.p`
  color: rgba(131, 131, 131, 1);
`;

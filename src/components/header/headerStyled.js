import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0c0d0d;
  padding: 13px 20px;
  color: white;
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
`;

export const StyledMenu = styled(Menu)`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    right: 0px;
    z-index: 1100;
    width: 300px;
    height: 100%;
    transition: all 0.5s ease 0s;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #0ef387;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transition: opacity 0.3s ease 0s;
  }
`;

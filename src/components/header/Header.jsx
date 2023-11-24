import React, { useState } from 'react';
import {
  HeaderLink,
  HeaderStyled,
  MenuBtn,
  SiteIcon,
  StyledMenu,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const toggleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <HeaderStyled>
      <HeaderLink to="/">
        <SiteIcon>
          <Symbols />
          <svg width={27} height={16}>
            <use xlinkHref="#site-icon" />
          </svg>
        </SiteIcon>
        ExpenseTracker
      </HeaderLink>
      <MenuBtn type="button" onClick={toggleMenu}>
        <svg width={36} height={36}>
          <use xlinkHref="#icon-burger-menu" />
        </svg>
      </MenuBtn>
      <div id="outer-container">
        <StyledMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          isOpen={menuOpenState}
          onStateChange={state => setMenuOpenState(state.isOpen)}
        >
          <main id="page-wrap">
            <div>
              <Symbols />
              <svg width={36} height={36}>
                <use xlinkHref="#user-sign-down" />
              </svg>
            </div>
            <button>X</button>
          </main>
        </StyledMenu>
      </div>
    </HeaderStyled>
  );
};

export default Header;

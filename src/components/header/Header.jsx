import React, { useState } from 'react';
import {
  HeaderLink,
  HeaderStyled,
  MenuBtn,
  SiteIcon,
  MobileMenu,
  CloseBtn,
  MenuHeader,
  ProfileBtn,
  UserArrowUp,
  MenuMain,
  EmptyHeaderStyled,
  ExpensesBtn,
  IncomeBtn,
  DefaultUserIcon,
  UserImgContainer,
  BtnContainer,
  UserLink,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';
import fakeImage from '../../images/fakeImage.webp';

const Header = () => {
  // const Header = ({ isLoggedIn }) => {
  const [isLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const [hideOrShowList, setHideOrShowList] = useState({});

  const [isRotated, setIsRotated] = useState(false);

  const userData = {
    userName: 'Alex Rybachok',
    userImgUrl: fakeImage,
  };

  const handleMenu = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { display: 'flex' };
      });
    }
  };
  const hanldeBtnList = () => {
    setIsRotated(prevState => !prevState);
    setIsOpen(prev => !prev);
    if (isOpen) {
      setHideOrShowList(() => {
        return {};
      });
    } else {
      setHideOrShowList(() => {
        return { display: 'flex' };
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <EmptyHeaderStyled>
        <HeaderLink to="/">
          <SiteIcon>
            <Symbols />
            <svg width={27} height={16}>
              <use xlinkHref="#site-icon" />
            </svg>
          </SiteIcon>
          ExpenseTracker
        </HeaderLink>
      </EmptyHeaderStyled>
    );
  }
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

      <MenuBtn type="button" onClick={handleMenu}>
        <svg width={36} height={36}>
          <use xlinkHref="#icon-burger-menu" />
        </svg>
      </MenuBtn>
      <MobileMenu style={hideOrShow}>
        <MenuHeader>
          <ProfileBtn type="button" onClick={hanldeBtnList}>
            {userData.userImgUrl ? (
              <UserImgContainer>
                <img
                  src={userData.userImgUrl}
                  alt="User"
                  width={34}
                  height={34}
                />
              </UserImgContainer>
            ) : (
              <DefaultUserIcon width={26} height={25}>
                <use xlinkHref="#icon-default-svg" />
              </DefaultUserIcon>
            )}
            <p>{userData.userName}</p>
            <UserArrowUp
              width={20}
              height={20}
              style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              <use xlinkHref="#user-icon-up" />
            </UserArrowUp>
          </ProfileBtn>
          <BtnContainer style={hideOrShowList}>
            <UserLink>Profile settings</UserLink>
            <UserLink>Log out</UserLink>
          </BtnContainer>
          <CloseBtn onClick={handleMenu}>
            <svg width={30} height={30}>
              <use xlinkHref="#icon-close" />
            </svg>
          </CloseBtn>
        </MenuHeader>
        <MenuMain>
          <ExpensesBtn>All Expense</ExpensesBtn>
          <IncomeBtn>All Income</IncomeBtn>
        </MenuMain>
        <div></div>
      </MobileMenu>
    </HeaderStyled>
  );
};

export default Header;

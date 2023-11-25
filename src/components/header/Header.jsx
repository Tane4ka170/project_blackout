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
  UserLinkIcons,
  UserName,
  ExpensesLink,
  IncomeLink,
  LinksContainer,
  ProfileContainer,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import { selectUser } from 'components/redux/user/selectors';
import { logoutThunk } from 'components/redux/auth/operations';

const Header = () => {
  const { name, avatar } = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const [hideOrShowList, setHideOrShowList] = useState({});

  const [isRotated, setIsRotated] = useState(false);

  const dispatch = useDispatch();

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

      <LinksContainer>
        <ExpensesLink to="/expenses">All Expense</ExpensesLink>
        <IncomeLink to="/incomes">All Income</IncomeLink>
      </LinksContainer>
      <ProfileContainer>
        <ProfileBtn type="button" onClick={hanldeBtnList}>
          {avatar ? (
            <UserImgContainer>
              <img src={avatar} alt="User" width={34} height={34} />
            </UserImgContainer>
          ) : (
            <DefaultUserIcon width={26} height={25}>
              <use xlinkHref="#icon-default-svg" />
            </DefaultUserIcon>
          )}
          <UserName>{name}</UserName>
          <UserArrowUp
            width={20}
            height={20}
            style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0)' }}
          >
            <use xlinkHref="#user-icon-down" />
          </UserArrowUp>
        </ProfileBtn>
      </ProfileContainer>

      <MenuBtn type="button" onClick={handleMenu}>
        <svg width={36} height={36}>
          <use xlinkHref="#icon-burger-menu" />
        </svg>
      </MenuBtn>
      <MobileMenu style={hideOrShow}>
        <MenuHeader>
          <ProfileBtn type="button" onClick={hanldeBtnList}>
            {avatar ? (
              <UserImgContainer>
                <img src={avatar} alt="User" width={34} height={34} />
              </UserImgContainer>
            ) : (
              <DefaultUserIcon width={26} height={25}>
                <use xlinkHref="#icon-default-svg" />
              </DefaultUserIcon>
            )}
            <UserName>{name}</UserName>
            <UserArrowUp
              width={20}
              height={20}
              style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              <use xlinkHref="#user-icon-down" />
            </UserArrowUp>
          </ProfileBtn>
          <BtnContainer style={hideOrShowList}>
            <UserLink to="/">
              <UserLinkIcons width={16} height={16}>
                <use xlinkHref="#icon-user" />
              </UserLinkIcons>
              Profile settings
            </UserLink>
            <UserLink to="/">
              <UserLinkIcons width={16} height={16}>
                <use xlinkHref="#icon-log-out" />
              </UserLinkIcons>
              <button onClick={() => dispatch(logoutThunk())}>Log out</button>
            </UserLink>
          </BtnContainer>
          <CloseBtn onClick={handleMenu}>
            <svg width={30} height={30}>
              <use xlinkHref="#icon-close" />
            </svg>
          </CloseBtn>
        </MenuHeader>
        <MenuMain>
          <ExpensesBtn to="/expenses">All Expense</ExpensesBtn>
          <IncomeBtn to="/incomes">All Income</IncomeBtn>
        </MenuMain>
        <div></div>
      </MobileMenu>
    </HeaderStyled>
  );
};

export default Header;

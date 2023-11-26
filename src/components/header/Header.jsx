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
  SecondBtnContainer,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectUser } from 'redux/user/selectors';
import { logoutThunk } from 'redux/auth/operations';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatar } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const [hideOrShowList, setHideOrShowList] = useState({});
  const [hideOrShowSecondList, setHideOrShowSecondList] = useState({});
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
        return { display: 'none' };
      });
    } else {
      setHideOrShowList(() => {
        return { display: 'flex' };
      });
    }
  };
  const hanldeSecondBtnList = () => {
    setIsRotated(prevState => !prevState);
    setIsOpen(prev => !prev);
    if (isOpen) {
      setHideOrShowSecondList(() => {
        return {};
      });
    } else {
      setHideOrShowSecondList(() => {
        return { display: 'flex' };
      });
    }
  };
  if (!isLoggedIn) {
    return (
      <EmptyHeaderStyled>
        <HeaderLink
          to="/"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
        >
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
      <HeaderLink
        to="/"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
      >
        <SiteIcon>
          <Symbols />
          <svg width={27} height={16}>
            <use xlinkHref="#site-icon" />
          </svg>
        </SiteIcon>
        ExpenseTracker
      </HeaderLink>

      <LinksContainer>
        <ExpensesLink
          to="/expenses"
          state={{ from: location }}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 230 }}
        >
          All Expense
        </ExpensesLink>
        <IncomeLink
          to="/incomes"
          state={{ from: location }}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 250 }}
        >
          All Income
        </IncomeLink>
      </LinksContainer>
      <ProfileContainer
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
      >
        <ProfileBtn type="button" onClick={hanldeSecondBtnList}>
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
            style={{ transform: isRotated ? 'rotate(0)' : 'rotate(180deg)' }}
          >
            <use xlinkHref="#user-icon-down" />
          </UserArrowUp>
        </ProfileBtn>
      </ProfileContainer>
      <SecondBtnContainer style={hideOrShowSecondList}>
        <UserLink to="/">
          <UserLinkIcons width={16} height={16}>
            <use xlinkHref="#icon-user" />
          </UserLinkIcons>
          Profile settings
        </UserLink>
        <UserLink to="/" onClick={() => dispatch(logoutThunk())}>
          <UserLinkIcons width={16} height={16}>
            <use xlinkHref="#icon-log-out" />
          </UserLinkIcons>
          Log out
        </UserLink>
      </SecondBtnContainer>
      <MenuBtn
        type="button"
        onClick={handleMenu}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 250 }}
      >
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
            <UserLink to="/" onClick={() => dispatch(logoutThunk())}>
              <UserLinkIcons width={16} height={16}>
                <use xlinkHref="#icon-log-out" />
              </UserLinkIcons>
              Log out
            </UserLink>
          </BtnContainer>
          <CloseBtn onClick={handleMenu}>
            <svg width={30} height={30}>
              <use xlinkHref="#icon-close" />
            </svg>
          </CloseBtn>
        </MenuHeader>
        <MenuMain>
          <ExpensesBtn to="/expenses" state={{ from: location }}>
            All Expense
          </ExpensesBtn>
          <IncomeBtn to="/incomes" state={{ from: location }}>
            All Income
          </IncomeBtn>
        </MenuMain>
        <div></div>
      </MobileMenu>
    </HeaderStyled>
  );
};

export default Header;

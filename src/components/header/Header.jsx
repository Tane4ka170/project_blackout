import React, { useEffect, useState } from 'react';
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
  UserLinkbutton,
  DarkBackDrop,
  HeaderBtnsContainer,
  UsualBackDrop,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';
import Modal from 'components/modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectUser } from 'redux/user/selectors';
import { useLocation } from 'react-router-dom';
import { useModal } from 'components/hooks/useModal';
import UserSetsModal from 'components/userSetsModal/UserSetsModal';
import LogOutModal from 'components/logOutModal/LogOutModal';

const Header = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarUrl } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const [hideOrShowList, setHideOrShowList] = useState({});
  const [hideOrShowSecondList, setHideOrShowSecondList] = useState({});
  const [isRotated, setIsRotated] = useState(false);
  const { isOpened, openModal, closeModal } = useModal();
  const [modal, setModal] = useState(null);

  const openUserSetsModal = () => {
    setModal(<UserSetsModal closeModal={closeModal} />);
    openModal();
  };

  const openLogOutModal = () => {
    setModal(
      <LogOutModal
        setHideOrShow={setHideOrShow}
        setHideOrShowList={setHideOrShowList}
        setHideOrShowSecondList={setHideOrShowSecondList}
        closeModal={closeModal}
      />
    );
    openModal();
  };

  const handleMenu = () => {
    setIsOpen(prev => !prev);

    if (isOpen) {
      setHideOrShow(() => {
        document.body.style.overflow = 'visible';
        return {};
      });
    } else {
      setHideOrShow(() => {
        document.body.style.overflow = 'hidden';
        return {
          display: 'flex',
        };
      });
    }
  };
  const hanldeBtnList = () => {
    setHideOrShowList(prev => ({
      display: prev.display === 'flex' ? 'none' : 'flex',
    }));
    setIsRotated(!isRotated);
  };
  const hanldeSecondBtnList = () => {
    setHideOrShowSecondList(prev => ({
      display: prev.display === 'flex' ? 'none' : 'flex',
    }));
    setIsRotated(!isRotated);
  };
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setHideOrShowList({ display: 'none' });
      setHideOrShowSecondList({ display: 'none' });
      setHideOrShow({ display: 'none' });
      setIsRotated(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      setHideOrShowList({ display: 'none' });
      setHideOrShowSecondList({ display: 'none' });
      setHideOrShow({ display: 'none' });
      setIsRotated(false);
    }
  };
  const handleBackDropForLinks = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      setHideOrShowList({ display: 'none' });
      setHideOrShowSecondList({ display: 'none' });
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
    <HeaderStyled onClick={handleBackDrop}>
      <UsualBackDrop onClick={handleBackDrop} />
      <HeaderLink
        to="/transactions/expenses"
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
      <HeaderBtnsContainer>
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
        <ProfileContainer
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 220 }}
        >
          <ProfileBtn type="button" onClick={hanldeSecondBtnList}>
            {avatarUrl ? (
              <UserImgContainer>
                <img src={avatarUrl} alt="User" width={34} height={34} />
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
      </HeaderBtnsContainer>
      <SecondBtnContainer style={hideOrShowSecondList}>
        <UserLink onClick={openUserSetsModal}>
          <UserLinkIcons width={16} height={16}>
            <use xlinkHref="#icon-user" />
          </UserLinkIcons>
          Profile settings
        </UserLink>
        {isOpened && modal && (
          <Modal children={modal} closeModal={closeModal} />
        )}
        <UserLinkbutton onClick={openLogOutModal}>
          <UserLinkIcons width={16} height={16}>
            <use xlinkHref="#icon-log-out" />
          </UserLinkIcons>
          Log out
        </UserLinkbutton>
        {isOpened && modal && (
          <Modal children={modal} closeModal={closeModal} />
        )}
      </SecondBtnContainer>

      <DarkBackDrop style={hideOrShow} onClick={handleBackDrop} />
      <MobileMenu style={hideOrShow} onClick={handleBackDropForLinks}>
        <MenuHeader>
          <ProfileBtn
            type="button"
            onClick={hanldeBtnList}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 270 }}
          >
            {avatarUrl ? (
              <UserImgContainer>
                <img src={avatarUrl} alt="User" width={34} height={34} />
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
            <UserLink onClick={openUserSetsModal}>
              <UserLinkIcons width={16} height={16}>
                <use xlinkHref="#icon-user" />
              </UserLinkIcons>
              Profile settings
            </UserLink>
            {isOpened && modal && (
              <Modal children={modal} closeModal={closeModal} />
            )}
            <UserLinkbutton onClick={openLogOutModal}>
              <UserLinkIcons width={16} height={16}>
                <use xlinkHref="#icon-log-out" />
              </UserLinkIcons>
              Log out
            </UserLinkbutton>
            {isOpened && modal && (
              <Modal children={modal} closeModal={closeModal} />
            )}
          </BtnContainer>
          <CloseBtn
            onClick={handleMenu}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 230 }}
          >
            <svg width={30} height={30}>
              <use xlinkHref="#icon-close" />
            </svg>
          </CloseBtn>
        </MenuHeader>
        <MenuMain>
          <ExpensesBtn
            to="/expenses"
            state={{ from: location }}
            onClick={handleMenu}
          >
            All Expense
          </ExpensesBtn>
          <IncomeBtn
            to="/incomes"
            state={{ from: location }}
            onClick={handleMenu}
          >
            All Income
          </IncomeBtn>
        </MenuMain>
        <div></div>
      </MobileMenu>
    </HeaderStyled>
  );
};

export default Header;

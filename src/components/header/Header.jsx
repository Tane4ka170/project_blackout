import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Modal from 'components/modal/Modal';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectUser } from 'redux/user/selectors';
import { useModal } from 'components/hooks/useModal';
import UserSetsModal from 'components/userSetsModal/UserSetsModal';
import LogOutModal from 'components/logOutModal/LogOutModal';

import {
  HeaderLink,
  HeaderAuthorised,
  BurgerBtn,
  SiteIcon,
  MobileMenu,
  CloseBtn,
  MenuHeader,
  ProfileSettingsBtn,
  UserArrowUp,
  MenuMain,
  UnAuthorisedHeader,
  ExpensesBtn,
  IncomeBtn,
  DefaultUserIcon,
  UserImgContainer,
  UserBarContainer,
  UserPanel,
  UserPanelIcons,
  UserName,
  ExpensesLink,
  IncomeLink,
  LinksContainer,
  ProfileSettingsContainer,
  HeaderProfileSettings,
  UserPanelLogOut,
  DarkBackDrop,
  HeaderBurgerMenu,
  UsualBackDrop,
} from './headerStyled';
import Symbols from 'images/svg/Symbols';

const Header = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatarUrl } = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});
  const [hideOrShowList, setHideOrShowList] = useState({});
  const [hideOrHeaderProfileSettings, setHideOrHeaderProfileSettings] =
    useState({});
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
        setHideOrHeaderProfileSettings={setHideOrHeaderProfileSettings}
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
    setHideOrHeaderProfileSettings(prev => ({
      display: prev.display === 'flex' ? 'none' : 'flex',
    }));
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (isOpened) {
        return;
      }

      if (event.key === 'Escape') {
        setHideOrShowList({ display: 'none' });
        setHideOrHeaderProfileSettings({ display: 'none' });
        setHideOrShow({ display: 'none' });
        setIsRotated(false);
        document.body.style.overflow = 'visible';
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpened]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      setHideOrShowList({ display: 'none' });
      setHideOrHeaderProfileSettings({ display: 'none' });
      setHideOrShow({ display: 'none' });
      setIsRotated(false);
      document.body.style.overflow = 'visible';
    }
  };
  const handleBackDropForLinks = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      setHideOrShowList({ display: 'none' });
      setHideOrHeaderProfileSettings({ display: 'none' });
    }
  };
  if (!isLoggedIn) {
    return (
      <UnAuthorisedHeader>
        <HeaderLink to="/">
          <SiteIcon>
            <Symbols />
            <svg width={27} height={16}>
              <use xlinkHref="#site-icon" />
            </svg>
          </SiteIcon>
          ExpenseTracker
        </HeaderLink>
      </UnAuthorisedHeader>
    );
  }
  return (
    <HeaderAuthorised onClick={handleBackDrop}>
      <UsualBackDrop
        onClick={handleBackDrop}
        style={hideOrHeaderProfileSettings}
      />
      <HeaderLink to="/transactions/expenses">
        <SiteIcon>
          <Symbols />
          <svg width={27} height={16}>
            <use xlinkHref="#site-icon" />
          </svg>
        </SiteIcon>
        ExpenseTracker
      </HeaderLink>

      <LinksContainer>
        <ExpensesLink to="/expenses" state={{ from: location }}>
          All Expense
        </ExpensesLink>
        <IncomeLink to="/incomes" state={{ from: location }}>
          All Income
        </IncomeLink>
      </LinksContainer>

      <HeaderBurgerMenu>
        <BurgerBtn type="button" onClick={handleMenu}>
          <svg width={36} height={36}>
            <use xlinkHref="#icon-burger-menu" />
          </svg>
        </BurgerBtn>

        <ProfileSettingsContainer>
          <ProfileSettingsBtn type="button" onClick={hanldeSecondBtnList}>
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
              style={{
                transform: isRotated ? 'rotate(180deg)' : 'rotate(0)',
              }}
            >
              <use xlinkHref="#user-icon-down" />
            </UserArrowUp>
          </ProfileSettingsBtn>
        </ProfileSettingsContainer>
      </HeaderBurgerMenu>

      <HeaderProfileSettings style={hideOrHeaderProfileSettings}>
        <UserPanel onClick={openUserSetsModal}>
          <UserPanelIcons width={16} height={16}>
            <use xlinkHref="#icon-user" />
          </UserPanelIcons>
          Profile settings
        </UserPanel>
        {isOpened && modal && (
          <Modal children={modal} closeModal={closeModal} />
        )}
        <UserPanelLogOut onClick={openLogOutModal}>
          <UserPanelIcons width={16} height={16}>
            <use xlinkHref="#icon-log-out" />
          </UserPanelIcons>
          Log out
        </UserPanelLogOut>
        {isOpened && modal && (
          <Modal children={modal} closeModal={closeModal} />
        )}
      </HeaderProfileSettings>

      <DarkBackDrop style={hideOrShow} onClick={handleBackDrop} />
      <MobileMenu style={hideOrShow} onClick={handleBackDropForLinks}>
        <MenuHeader>
          <ProfileSettingsBtn
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
              style={{
                transform: isRotated ? 'rotate(180deg)' : 'rotate(0)',
              }}
            >
              <use xlinkHref="#user-icon-down" />
            </UserArrowUp>
          </ProfileSettingsBtn>
          <UserBarContainer style={hideOrShowList}>
            <UserPanel onClick={openUserSetsModal}>
              <UserPanelIcons width={16} height={16}>
                <use xlinkHref="#icon-user" />
              </UserPanelIcons>
              Profile settings
            </UserPanel>
            {isOpened && modal && (
              <Modal children={modal} closeModal={closeModal} />
            )}
            <UserPanelLogOut onClick={openLogOutModal}>
              <UserPanelIcons width={16} height={16}>
                <use xlinkHref="#icon-log-out" />
              </UserPanelIcons>
              Log out
            </UserPanelLogOut>
            {isOpened && modal && (
              <Modal children={modal} closeModal={closeModal} />
            )}
          </UserBarContainer>
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
    </HeaderAuthorised>
  );
};

export default Header;

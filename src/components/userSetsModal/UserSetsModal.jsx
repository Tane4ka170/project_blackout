import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading, selectUser } from 'redux/user/selectors';
import {
  changeAvatarThunk,
  deleteAvatarThunk,
  updateUserInfoThunk,
} from 'redux/user/operations';
import { CirclesWithBar } from 'react-loader-spinner';

import Symbols from 'images/svg/Symbols';
import {
  GrayButton,
  StyledBtnWrap,
  StyledInputName,
  StyledInputUpd,
  StyledLabelUpd,
  StyledLoader,
  StyledSaveBtn,
  StyledSelect,
  StyledSvgWrap,
  StyledTitle,
  StyledWrap,
} from 'components/userSetsModal/UserSetsModal.styled';
import { toast } from 'react-toastify';

const CURRENCIES = [
  { value: 'uah', label: '₴ UAH' },
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
];

const UserSetsModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const inputRef = useRef(null);

  const [userName, setUserName] = useState(user.name);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    CURRENCIES.find(option => option.value === user.currency)
  );

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleChangeAvatar = () => {
    const currentInput = inputRef?.current;

    if (currentInput) {
      const avatar = currentInput.files[0];
      dispatch(changeAvatarThunk(avatar))
        .unwrap()
        .then(() => {
          toast.success('Avatar has been updated successfully!');
        })
        .catch(e => {
          toast.error(
            'Oops, something went wrong! Try again or upload smaller photo!'
          );
        });
    }
  };

  const handleRemove = () => {
    if (user._id) {
      dispatch(deleteAvatarThunk(user._id))
        .unwrap()
        .then(() => {
          toast.success('Avatar has been removed successfully!');
        })
        .catch(e => {
          toast.error('Oops, something went wrong! Try again!');
        });
    }
  };

  const handleSave = e => {
    e.preventDefault();
    const data = {
      name: userName,
      currency: selectedOption.value,
    };

    dispatch(updateUserInfoThunk(data));
    if (selectedOption.value !== user.currency || userName !== user.name) {
      toast.success('Your profile info has been changed successfully!');
    }

    closeModal();
  };

  return (
    <div>
      <StyledTitle>Profile settings</StyledTitle>
      <StyledWrap>
        {user?.avatarUrl ? (
          <StyledSvgWrap>
            {loading ? (
              <StyledLoader>
                <CirclesWithBar />
              </StyledLoader>
            ) : (
              <img src={user.avatarUrl} alt="user avatar" />
            )}
          </StyledSvgWrap>
        ) : (
          <StyledSvgWrap>
            <Symbols />
            {loading ? (
              <StyledLoader>
                <CirclesWithBar />
              </StyledLoader>
            ) : (
              <svg width={38} height={38}>
                <use xlinkHref="#icon-default-svg" />
              </svg>
            )}
          </StyledSvgWrap>
        )}

        <StyledBtnWrap>
          <StyledLabelUpd htmlFor="uploadAvatar" className="upload-btn">
            Upload new photo
          </StyledLabelUpd>
          <StyledInputUpd
            id="uploadAvatar"
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleChangeAvatar}
          />
          <GrayButton onClick={handleRemove}>Remove</GrayButton>
        </StyledBtnWrap>

        <form onSubmit={handleSave}>
          <StyledBtnWrap>
            <StyledSelect className={isOpen ? 'select-open' : ''}>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div>{selectedOption.label}</div>

                <Symbols />
                <svg className="svg-arrow" width={20} height={20}>
                  <use xlinkHref="#user-icon-up" />
                </svg>
              </div>
              {isOpen && (
                <ul className="select-options">
                  {CURRENCIES.map(option => (
                    <li
                      key={option.value}
                      onClick={() => handleOptionClick(option)}
                    >
                      <span>{option.label} </span>
                    </li>
                  ))}
                </ul>
              )}
            </StyledSelect>
            <StyledInputName
              type="text"
              placeholder={userName}
              onChange={({ target }) => {
                setUserName(target.value);
              }}
            />
          </StyledBtnWrap>
          <StyledSaveBtn type="submit">Save</StyledSaveBtn>
        </form>
      </StyledWrap>
    </div>
  );
};

export default UserSetsModal;

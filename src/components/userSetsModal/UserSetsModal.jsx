import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';

import {
  changeAvatarThunk,
  deleteAvatarThunk,
  updateUserInfoThunk,
} from 'redux/user/operations';
import Symbols from 'images/svg/Symbols';

import {
  GrayButton,
  StyledTitle,
  StyledWrap,
} from 'components/userSetsModal/UserSetsModal.styled';

const CURRENCIES = [
  { value: 'uah', label: '₴ UAH' },
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
];

const UserSetsModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const inputRef = useRef(null);

  const [selectedValue, setSelectedValue] = useState('');
  const [userName, setUserName] = useState(user.name);

  const handleChangeAvatar = () => {
    const currentInput = inputRef?.current;

    if (currentInput && currentInput.files.length > 0) {
      const avatar = currentInput.files[0];
      dispatch(changeAvatarThunk(avatar));
    }
  };

  const handleRemove = () => {
    if (user._id) {
      dispatch(deleteAvatarThunk(user._id));
    }
  };

  const handleSelectChange = ({ target }) => {
    const value = target.value;
    setSelectedValue(value);
  };

  const handleSave = e => {
    e.preventDafault();
    const data = {
      name: userName,
      currency: selectedValue,
    };

    dispatch(updateUserInfoThunk(data));
  };

  return (
    <div>
      <StyledTitle>Profile settings</StyledTitle>
      <StyledWrap>
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt="user avatar" />
        ) : (
          <div>
            <Symbols />
            <svg width={38} height={38}>
              <use xlinkHref="#icon-user" />
            </svg>
          </div>
        )}

        <label>
          Upload new photo
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleChangeAvatar}
          />
        </label>
        <GrayButton onClick={handleRemove}>Remove</GrayButton>
        <form onSubmit={handleSave}>
          <select value={selectedValue} onChange={handleSelectChange}>
            {CURRENCIES.map(currency => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder={userName}
            onChange={({ target }) => {
              setUserName(target.value);
            }}
          />
          <button type="submit">Save</button>
        </form>
      </StyledWrap>
    </div>
  );
};

export default UserSetsModal;

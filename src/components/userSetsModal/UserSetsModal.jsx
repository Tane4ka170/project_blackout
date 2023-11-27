import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { changeAvatarThunk, deleteAvatarThunk } from 'redux/user/operations';
import Symbols from 'images/svg/Symbols';

import {
  GrayButton,
  StyledTitle,
  StyledWrap,
} from 'components/userSetsModal/UserSetsModal.styled';

const UserSetsModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const inputRef = useRef(null);

  const handleUpdate = () => {
    const currentInput = inputRef?.current;

    if (currentInput && currentInput.files.length > 0) {
      const avatar = currentInput.files[0];
      dispatch(changeAvatarThunk(avatar));
    }
  };

  const handleRemove = () => {
    if (user?._id) {
      dispatch(deleteAvatarThunk(user._id));
    }
  };

  const handleSave = () => {};

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
            onChange={handleUpdate}
          />
        </label>
        <GrayButton onClick={handleRemove}>Remove</GrayButton>
        <select>
          <option>UAH</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input type="text" />
        <button onClick={handleSave}>Save</button>
      </StyledWrap>
    </div>
  );
};

export default UserSetsModal;

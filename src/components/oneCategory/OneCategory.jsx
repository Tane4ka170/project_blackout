import React from 'react';
import { StyledLi } from './StyledOneCategory';

export const OneCategory = ({
  _id,
  categoryName,
  deleteCategory,
  editCategory,
}) => {
  return (
    <StyledLi>
      <p>{categoryName}</p>
      <div>
        <button>Choose</button>
        <button onClick={editCategory}>Edit</button>
        <button type="button" onClick={() => deleteCategory(_id)}>
          Delete
        </button>
      </div>
    </StyledLi>
  );
};

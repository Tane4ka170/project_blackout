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
        <button>
          <svg width={16} height={16}>
            <use xlinkHref="#icon-check" />
          </svg>
        </button>
        <button onClick={editCategory}>
          <svg width={16} height={16}>
            <use xlinkHref="#icon-edit-2" />
          </svg>
        </button>
        <button type="button" onClick={() => deleteCategory(_id)}>
          <svg width={16} height={16}>
            <use xlinkHref="#icon-trash-2" />
          </svg>
        </button>
      </div>
    </StyledLi>
  );
};

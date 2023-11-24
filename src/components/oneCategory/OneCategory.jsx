import React from 'react';

export const OneCategory = ({
  _id,
  categoryName,
  deleteCategory,
  editCategory,
}) => {
  return (
    <li>
      {categoryName}
      <button>Choose</button>
      <button onClick={editCategory}>Edit</button>
      <button type="button" onClick={() => deleteCategory(_id)}>
        Delete
      </button>
    </li>
  );
};

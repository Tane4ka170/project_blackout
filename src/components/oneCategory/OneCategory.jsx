import React from 'react';

export const OneCategory = ({ _id, categoryName, deleteCategory }) => {
  return (
    <li>
      {categoryName}
      <button>Choose</button>
      <button>Edit</button>
      <button type="button" onClick={() => deleteCategory(_id)}>
        Delete
      </button>
    </li>
  );
};

import { OneCategory } from 'components/oneCategory/OneCategory';
import { deleteCategoryThunk } from 'components/redux/category/operations';
import { selectCategories } from 'components/redux/category/selectors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  return (
    <div>
      <p>All categories</p>
      <ul>
        {categories?.map(category => {
          return (
            <OneCategory
              key={category.id}
              {...category}
              deleteCategory={() => dispatch(deleteCategoryThunk(category.id))}
            />
          );
        })}
      </ul>
      <form action="">
        <p>New category</p>
        <input type="text" placeholder="Enter the text" />
        <button>Add</button>
      </form>
    </div>
  );
};

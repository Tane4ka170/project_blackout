import { OneCategory } from 'components/oneCategory/OneCategory';
import {
  createCategoryThunk,
  deleteCategoryThunk,
} from 'components/redux/category/operations';
import { selectCategories } from 'components/redux/category/selectors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = ({ type = 'incomes' }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const submit = ({ categoryName }) => {
    const categoryDate = { type, categoryName };
    dispatch(createCategoryThunk(categoryDate));
    reset();
  };

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
      <form action="" onSubmit={handleSubmit(submit)}>
        <p>New category</p>
        <input
          type="text"
          placeholder="Enter the text"
          {...register('categoryName', { required: true })}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

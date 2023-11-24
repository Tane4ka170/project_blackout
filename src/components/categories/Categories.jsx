import { OneCategory } from 'components/oneCategory/OneCategory';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
} from 'components/redux/category/operations';
import { selectCategories } from 'components/redux/category/selectors';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = ({ type = 'incomes' }) => {
  const categories = useSelector(selectCategories);
  console.log(categories);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategoriesThunk());
    }
  }, [dispatch, isLoggedIn]);

  const submit = ({ categoryName }) => {
    const categoryDate = { type, categoryName };
    dispatch(createCategoryThunk(categoryDate));
    reset();
  };

  return (
    <div>
      <p>All categories</p>
      <ul>
        {categories.length ? (
          categories?.map(category => {
            return (
              <OneCategory
                key={category._id}
                {...category}
                deleteCategory={() =>
                  dispatch(deleteCategoryThunk(category._id))
                }
              />
            );
          })
        ) : (
          <p>There are no categories yet</p>
        )}
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

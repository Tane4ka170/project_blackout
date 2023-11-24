import { OneCategory } from 'components/oneCategory/OneCategory';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  updateCategoryThunk,
} from 'components/redux/category/operations';
import { selectCategories } from 'components/redux/category/selectors';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Categories = ({ type = 'incomes' }) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const [currentCategory, setCurrentCategory] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategoriesThunk());
    }
  }, [dispatch, isLoggedIn]);

  const editCategory = category => {
    setCurrentCategory(category);
    reset({ categoryName: category.categoryName });
  };

  const submit = ({ categoryName }) => {
    const categoryDate = { type, categoryName };
    if (currentCategory) {
      dispatch(updateCategoryThunk({ id: currentCategory._id, categoryName }));
      setCurrentCategory(null);
    } else {
      dispatch(createCategoryThunk(categoryDate));
    }
    reset();
    setCurrentCategory(null);
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
                editCategory={() => editCategory(category)}
              />
            );
          })
        ) : (
          <p>There are no categories yet</p>
        )}
      </ul>
      <form action="" onSubmit={handleSubmit(submit)}>
        <p>{currentCategory ? 'Edit category' : 'New category'}</p>
        <input
          type="text"
          placeholder="Enter the text"
          {...register('categoryName', { required: true })}
        />
        <button>{currentCategory ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
};

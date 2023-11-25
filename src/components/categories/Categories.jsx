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
import {
  AllCategoriesP,
  CategoriesDiv,
  CategoriesList,
  CategoriesPlugP,
  InputTitleP,
  SubmitForm,
  TransactionType,
} from './StyledCategories';

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
      reset({ categoryName: '' });
    } else {
      dispatch(createCategoryThunk(categoryDate));
      reset();
    }
    reset();
    setCurrentCategory(null);
  };

  return (
    <CategoriesDiv>
      <TransactionType>Expenses</TransactionType>
      <AllCategoriesP>All categories</AllCategoriesP>
      <CategoriesList>
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
          <CategoriesPlugP>There are no categories yet😭</CategoriesPlugP>
        )}
      </CategoriesList>
      <SubmitForm action="" onSubmit={handleSubmit(submit)}>
        <InputTitleP>
          {currentCategory ? 'Edit category' : 'New category'}
        </InputTitleP>
        <input
          type="text"
          placeholder="Enter the text"
          {...register('categoryName', { required: true })}
        />
        <button>{currentCategory ? 'Edit' : 'Add'}</button>
      </SubmitForm>
    </CategoriesDiv>
  );
};

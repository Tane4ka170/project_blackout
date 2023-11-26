import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { OneCategory } from 'components/oneCategory/OneCategory';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectCategories } from 'redux/category/selectors';
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  updateCategoryThunk,
} from 'redux/category/operations';

import {
  AllCategoriesP,
  CategoriesDiv,
  CategoriesList,
  CategoriesPlugP,
  InputTitleP,
  StyledErrorP,
  SubmitForm,
  TransactionType,
} from './StyledCategories';
// import { useParams } from 'react-router';

export const Categories = ({ type = 'incomes' }) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // const { transactionsType } = useParams();

  const [currentCategory, setCurrentCategory] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategoriesThunk())
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong');
        });
    }
  }, [dispatch, isLoggedIn]);

  const editCategory = category => {
    setCurrentCategory(category);
    reset({ categoryName: category.categoryName });
  };

  const submit = ({ categoryName }) => {
    const categoryDate = { type, categoryName };
    if (currentCategory) {
      dispatch(updateCategoryThunk({ id: currentCategory._id, categoryName }))
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong');
        });
      reset({ categoryName: '' });
    } else {
      dispatch(createCategoryThunk(categoryDate))
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong');
        });
      // reset();
    }
    reset();
    setCurrentCategory(null);
  };

  const deleteCategory = id => {
    dispatch(deleteCategoryThunk(id))
      .unwrap()
      .catch(e => {
        toast.error('Oops, something went wrong');
      });
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
                deleteCategory={() => deleteCategory(category._id)}
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
          {...register('categoryName', { required: true, maxLength: 30 })}
        />
        <button>{currentCategory ? 'Edit' : 'Add'}</button>
      </SubmitForm>
      {errors?.categoryName && (
        <StyledErrorP>Максимальна кількість символів - 30</StyledErrorP>
      )}
    </CategoriesDiv>
  );
};

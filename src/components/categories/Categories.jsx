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
  StyledErrorP,
  StyledInput,
  SubmitForm,
  TransactionType,
} from './StyledCategories';
// import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCategoryInput } from 'helpers/schemas';

export const Categories = ({ type = 'incomes' }) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // const { transactionsType } = useParams();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaCategoryInput) });

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
    setIsEditing(true);
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
      setIsEditing(false);
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
    if (currentCategory && currentCategory._id === id) {
      reset({ categoryName: '' });
      setCurrentCategory(null);
      setIsEditing(false);
    }

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
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <SubmitForm action="" onSubmit={handleSubmit(submit)}>
          <InputTitleP>
            {isEditing ? 'Edit category' : 'New category'}
          </InputTitleP>
          <StyledInput
            type="text"
            placeholder="Enter the text"
            {...register('categoryName', { required: true, maxLength: 30 })}
            autoFocus={currentCategory !== null}
            key={currentCategory?._id}
          />
          <button>{isEditing ? 'Edit' : 'Add'}</button>
        </SubmitForm>
        {errors?.categoryName && (
          <StyledErrorP>{errors.categoryName.message}</StyledErrorP>
        )}
      </motion.div>
    </CategoriesDiv>
  );
};

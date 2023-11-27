import { OneCategory } from 'components/oneCategory/OneCategory';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  updateCategoryThunk,
} from 'redux/category/operations';
import { selectCategories } from 'redux/category/selectors';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  AllCategoriesP,
  CancelButton,
  CategoriesDiv,
  CategoriesList,
  CategoriesPlugP,
  EditButton,
  InputTitleP,
  StyledErrorP,
  StyledInput,
  SubmitForm,
  TransactionType,
} from './StyledCategories';

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCategoryInput } from 'helpers/schemas';

export const Categories = ({ type, chooseCategories }) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
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
  }, [dispatch, isLoggedIn, type]);

  const editCategory = category => {
    setCurrentCategory(category);
    reset({ categoryName: category.categoryName });
    setIsEditing(true);
  };

  const onCancel = () => {
    reset({ categoryName: '' });
    setCurrentCategory(null);
    setIsEditing(false);
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
      <TransactionType>{type}</TransactionType>
      <AllCategoriesP>All categories</AllCategoriesP>
      <CategoriesList>
        {categories?.type?.length ? (
          categories?.type?.map(category => {
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
          <InputTitleP $error={errors?.categoryName}>
            {isEditing ? 'Edit category' : 'New category'}
          </InputTitleP>
          <StyledInput
            type="text"
            placeholder="Enter the text"
            {...register('categoryName', { required: true, maxLength: 30 })}
            autoFocus={currentCategory !== null}
            key={currentCategory?._id}
            $error={errors?.categoryName}
          />
          <EditButton $error={errors?.categoryName}>
            {isEditing ? 'Edit' : 'Add'}
          </EditButton>
          {isEditing && <CancelButton onClick={onCancel}>Cancel</CancelButton>}
        </SubmitForm>
        {errors?.categoryName && (
          <StyledErrorP>{errors.categoryName.message}</StyledErrorP>
        )}
      </motion.div>
    </CategoriesDiv>
  );
};

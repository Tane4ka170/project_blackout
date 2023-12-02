import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  getCategoriesThunk,
  createCategoryThunk,
  deleteCategoryThunk,
  updateCategoryThunk,
} from 'redux/category/operations';
import { selectCategories } from 'redux/category/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import {
  CategoriesDiv,
  CategoriesList,
  CategoriesPlugP,
  AllCategoriesP,
  TransactionType,
} from './AllCategories.styled.js';
import { CategoryForm } from '../categoryForm/CategoryForm';
import { OneCategory } from 'components/categories/oneCategory/OneCategory.jsx';
import { schemaCategoryInput } from 'helpers/schemas';

export const AllCategories = ({
  type,
  chooseCategories,
  closeModal,
  setCategoryId,
}) => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [addedCategories, setAddedCategories] = useState([]);

  const categoriesListRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCategoryInput),
  });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCategoriesThunk())
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
    }
  }, [dispatch, isLoggedIn, type]);

  useEffect(() => {
    if (categories[type]) {
      setAddedCategories(categories[type]);
    }
  }, [categories, type]);

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

    const addedCategory = addedCategories.find(
      category => category.categoryName === categoryName
    );

    if (addedCategory) {
      toast.warning('Category with this name already exists');
      return;
    }

    if (currentCategory) {
      dispatch(updateCategoryThunk({ id: currentCategory._id, categoryName }))
        .unwrap()
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
      reset({ categoryName: '' });
      setIsEditing(false);
    } else {
      dispatch(createCategoryThunk(categoryDate))
        .unwrap()
        .then(() => {
          if (categoriesListRef.current) {
            categoriesListRef.current.scrollTop =
              categoriesListRef.current.scrollHeight;
          }
        })
        .catch(e => {
          toast.error('Oops, something went wrong. Try to reload page');
        });
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
        toast.error('Oops, something went wrong. Try to reload page');
      });
  };

  return (
    <CategoriesDiv>
      <TransactionType>{type}</TransactionType>
      <AllCategoriesP>All categories</AllCategoriesP>
      <CategoriesList ref={categoriesListRef}>
        {categories[type]?.length ? (
          categories[type]?.map(category => (
            <OneCategory
              setCategoryId={setCategoryId}
              closeModal={closeModal}
              chooseCategories={chooseCategories}
              key={category._id}
              {...category}
              deleteCategory={() => deleteCategory(category._id)}
              editCategory={() => editCategory(category)}
            />
          ))
        ) : (
          <CategoriesPlugP>There are no categories yet😭</CategoriesPlugP>
        )}
      </CategoriesList>
      <CategoryForm
        isEditing={isEditing}
        currentCategory={currentCategory}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        errors={errors}
        onCancel={onCancel}
      />
    </CategoriesDiv>
  );
};

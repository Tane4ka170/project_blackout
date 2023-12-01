import React from 'react';

import {
  CancelButton,
  EditButton,
  InputTitleP,
  StyledErrorP,
  StyledInput,
  SubmitForm,
} from './CategoryForm.styled';
import { FramerMotion } from 'helpers/framer-motion';

export const CategoryForm = ({
  isEditing,
  currentCategory,
  handleSubmit,
  errors,
  onCancel,
  submit,
  register,
}) => (
  <FramerMotion $variant="categoryForm">
    <SubmitForm action="" onSubmit={handleSubmit(submit)}>
      <InputTitleP $error={errors?.categoryName}>
        {isEditing ? 'Edit category' : 'New category'}
      </InputTitleP>
      <StyledInput
        type="text"
        placeholder="Enter the text"
        {...register('categoryName')}
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
  </FramerMotion>
);

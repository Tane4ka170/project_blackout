//Base
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Form
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

// Validation
import validationSchema from './validationSchema/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import onSubmitTransaction from 'components/onSubmitTransaction/onSubmitTransaction';
import PreSelectType from 'components/preSelectType/PreSelectType';

// Form components
import RadioBtn from 'components/transactionForm/radioBtn/RadioBtn';
import DateInput from 'components/transactionForm/dateInput/DateInput';
import CategoryInput from 'components/transactionForm/categoryInput/CategoryInput';
import SumInput from 'components/transactionForm/sumInput/SumInput';
import DescriptionInput from 'components/transactionForm/descriptionInput/DescriptionInput';

// styled
import {
  StyledBtn,
  StyledFormWrapper,
  StyledErrorMsg,
  StyledInputsWrapper,
} from './OperationForm.styled';

// Framer
import { motion } from 'framer-motion';

const OperationForm = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  const [categoryId, setCategoryId] = useState('');

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: '',
      date: '',
      time: '00:00:00',
      category: '',
      sum: '',
      comment: '',
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <StyledFormWrapper
        autoComplete="off"
        onSubmit={handleSubmit(data =>
          onSubmitTransaction(
            data,
            PreSelectType(transactionsType),
            categoryId,
            dispatch
          )
        )}
      >
        {/* type select */}
        <RadioBtn control={control} />
        {/* date inputs */}
        <DateInput control={control} />
        {/* category input */}
        <StyledInputsWrapper>
          <CategoryInput
            control={control}
            setValue={setValue}
            setCategoryId={setCategoryId}
          />
          {errors.category && (
            <StyledErrorMsg>{errors.category.message}</StyledErrorMsg>
          )}
        </StyledInputsWrapper>
        {/* sum input */}
        <StyledInputsWrapper>
          <SumInput control={control} />
          {errors.sum && <StyledErrorMsg>{'Sum is required'}</StyledErrorMsg>}
        </StyledInputsWrapper>
        {/* comment input */}
        <StyledInputsWrapper>
          <DescriptionInput control={control} />
          {errors.comment && (
            <StyledErrorMsg>{errors.comment.message}</StyledErrorMsg>
          )}
          {/* submit btn */}
        </StyledInputsWrapper>
        <StyledBtn type="submit">Add</StyledBtn>
      </StyledFormWrapper>
    </motion.div>
  );
};

export default OperationForm;

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

const OperationForm = ({editData, edit}) => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  const [categoryId, setCategoryId] = useState('');

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: editData?.type ? editData?.type : '',
      date: editData?.date ? editData?.date : '',
      time: '00:00:00',
      category: editData?.category?.categoryName ? editData?.category?.categoryName : '',
      sum: editData?.sum ? editData?.sum : '',
      comment: editData?.comment ? editData?.comment : '',
    },
    resolver: yupResolver(validationSchema),
  });

  const ifEditSubmit = (data) => {
    if (!edit) {
      onSubmitTransaction(
        data,
        PreSelectType(transactionsType),
        categoryId,
        dispatch,
        reset,
      )
    } else {
      onSubmitTransaction(
        data,
        PreSelectType(transactionsType),
        categoryId,
        dispatch,
        reset,
        edit
      )
    }
  }

    // style
  const wrapperStyle = {
    padding: edit ? '40px' : '',
    width: edit ? '100%' : '',
    marginBottom: edit? '0' : '',
  };



  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <StyledFormWrapper style={wrapperStyle}
        autoComplete="off"
        onSubmit={
          handleSubmit(data => 
          ifEditSubmit(data)
        )}
      >
        {/* type select */}
        <RadioBtn control={control} edit={edit} editData={ editData } />
        {/* date inputs */}
        <DateInput control={control} editData={ editData } />
        {/* category input */}
        <StyledInputsWrapper>
          <CategoryInput
            control={control}
            setValue={setValue}
            setCategoryId={setCategoryId}
            editData= { editData }
          />
          {errors.category && (
            <StyledErrorMsg>{errors.category.message}</StyledErrorMsg>
          )}
        </StyledInputsWrapper>
        {/* sum input */}
        <StyledInputsWrapper>
          <SumInput control={control} editData= { editData }/>
          {errors.sum && <StyledErrorMsg>{'Sum is required'}</StyledErrorMsg>}
        </StyledInputsWrapper>
        {/* comment input */}
        <StyledInputsWrapper>
          <DescriptionInput control={control} editData= { editData }/>
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

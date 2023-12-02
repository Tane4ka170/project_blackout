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


const OperationForm = ({editData, closeModal}) => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  const [ categoryId, setCategoryId] = useState('');
  const [ datePicker, setDatePicker] = useState(editData ? editData.date : '');

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
    type: editData?.type || '',
    time: editData?.time || '00:00:00',
    category: editData?.category?.categoryName || '',
    sum: editData?.sum || '',
    comment: editData?.comment || '',
    },
    resolver: yupResolver(validationSchema),
  });
  const ifEditSubmit = (data) => {
    if (!editData) {
      onSubmitTransaction(
        data,
        PreSelectType(transactionsType),
        categoryId,
        dispatch,
        reset,
        undefined,
        datePicker
      )
    } else {
      onSubmitTransaction(
        data,
        editData.type,
        categoryId,
        dispatch,
        reset,
        editData,
        datePicker
      )
      closeModal();
    }
  }

    // style
  const wrapperStyle = {
    padding: editData ? '40px' : '',
    width: editData ? '100%' : '',
    marginBottom: editData? '0' : '',
  };



  return (
    // <StyledFormWrapper
    //   autoComplete="off"
    //   onSubmit={handleSubmit(data =>
    //     onSubmitTransaction(
    //       data,
    //       PreSelectType(transactionsType),
    //       categoryId,
    //       dispatch,
    //       reset
    //     )
    //   )}
    // >
      <StyledFormWrapper style={wrapperStyle}
        autoComplete="off"
        onSubmit={
          handleSubmit(data => 
          ifEditSubmit(data)
        )}
      > 
        {/* type select */}
        <RadioBtn control={control} editData={ editData } />
        {/* date inputs */}
        <DateInput control={control} editData={ editData } datePiker={setDatePicker} />
        {/* category input */}
        <StyledInputsWrapper>
          <CategoryInput
            control={control}
            setValue={setValue}
            setCategoryId={setCategoryId}
            type = { editData?.type }
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
        <StyledBtn type="submit">{editData ? 'Edit' : 'Add'}</StyledBtn>
      </StyledFormWrapper>
  );
};

export default OperationForm;

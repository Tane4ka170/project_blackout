//Base 
import React from "react";
import { useParams } from "react-router-dom";

// Form
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

// Validation
import validationSchema from "./validationSchema/validationSchema";
import { yupResolver } from '@hookform/resolvers/yup';

// Components
import onSubmitTransaction from "components/onSubmitTransaction/onSubmitTransaction";
import PreSelectType from "components/preSelectType/PreSelectType";

// Form components
import RadioBtn from "components/transactionForm/radioBtn/RadioBtn";
import DateInput from "components/transactionForm/dateInput/DateInput";
import CategoryInput from "components/transactionForm/categoryInput/CategoryInput";
import SumInput from "components/transactionForm/sumInput/SumInput";
import DescriptionInput from "components/transactionForm/descriptionInput/DescriptionInput";

// styled
import { StyledBtn, StyledFormWrapper, StyledErrorMsg, StyledInputsWrapper } from "./OperationForm.styled";

const OperationForm = () => {
  const { transactionsType } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: '',
      date: "",
      time: "00:00:00",
      category: '',
      sum: '',
      desc: '',
    },
    resolver: yupResolver(validationSchema)
  })
  return (
    <StyledFormWrapper onSubmit={
      handleSubmit(data => onSubmitTransaction(data, PreSelectType(transactionsType)))
    }>
      {/* type select */}
      <RadioBtn control={control} />
      {/* date inputs */}
      <DateInput control={control} />
      {/* category input */}
      <StyledInputsWrapper>
        <CategoryInput control={control} />
        {errors.category && <StyledErrorMsg>{errors.category.message}</StyledErrorMsg>}
      </StyledInputsWrapper>
      {/* sum input */}
      <StyledInputsWrapper>
        <SumInput control={control} />
        {errors.sum && <StyledErrorMsg>{'Sum is required'}</StyledErrorMsg>}
      </StyledInputsWrapper>
      {/* desc input */}
      <StyledInputsWrapper>
        <DescriptionInput control={control} />
        {errors.desc && <StyledErrorMsg>{errors.desc.message}</StyledErrorMsg>}
        {/* submit btn */}
      </StyledInputsWrapper>
      <StyledBtn type="submit">Add</StyledBtn>
    </StyledFormWrapper>
  );
};


export default OperationForm;
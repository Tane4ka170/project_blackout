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
import RadioBtn from "components/transactionForm/radioBtn/StyledRadioBtn";
import DateInput from "components/transactionForm/dateInput/StyledDateInput";
import CategoryInput from "components/transactionForm/categoryInput/StyledCategoryInput";
import SumInput from "components/transactionForm/sumInput/StyledSumInput";
import DescriptionInput from "components/transactionForm/descriptionInput/StyledDescriptionInput";

// styled
import { StyledFormWrapper } from "./OperationForm";

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
      // sum: null,
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
      <DateInput control={ control }/>
      {/* category input */}
      <CategoryInput control={control} />
      {errors.category && <p>{ errors.category.message }</p>}
      {/* sum input */}
      <SumInput control={ control }/>
      {errors.sum && <p>{ errors.sum.message }</p>}
      {/* desc input */}
      <DescriptionInput control={control} />
      {errors.desc && <p>{ errors.desc.message }</p>}
      {/* submit btn */}
      <button type="submit">Submit</button>
    </StyledFormWrapper>
  );
};


export default OperationForm;
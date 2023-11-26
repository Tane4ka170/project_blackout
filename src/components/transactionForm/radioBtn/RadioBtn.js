// base
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

// component
import PreSelectType from "components/preSelectType/PreSelectType";

//styled
import { StyledInputWrapper, StyledLabel, StyledWrapper, StyledInput } from "./RadioBtn.styled";

const RadioBtn = ({ control }) => {
  const [type, setType] = useState();
  const { transactionsType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setType(PreSelectType(transactionsType)) ;
  }, [transactionsType]);

  const handleTypeChange = (value) => {
    navigate(`/transactions/${value}`)
  };

  return (
    <StyledWrapper>
      <Controller
        name="type"
        control={control}
        defaultValue="income"
        render={() => (
          <StyledInputWrapper>
            <StyledInput
              id="income"
              type="radio"
              value='income'
              onChange={() => {
                handleTypeChange('income')
              }}
              checked={type === 'income'}
            />
            <StyledLabel htmlFor="income">Income</StyledLabel>
          </StyledInputWrapper>
        )}
      />
      <Controller
        name="type"
        control={control}
        defaultValue=""
        render={() => (
          <StyledInputWrapper>
            <StyledInput
              id="expense"
              type="radio"
              value='expense'
              onChange={() => {
                handleTypeChange('expense')
              }}
              checked={type === 'expense'}
            />
            <StyledLabel htmlFor="expense">Expense</StyledLabel>
          </StyledInputWrapper>
        )}
      />
    </StyledWrapper>
  );
};


export default RadioBtn;
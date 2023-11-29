import React from "react";
import { Controller } from "react-hook-form";

// selectors
import { useSelector } from "react-redux";
import { selectUserCurrency } from "redux/user/selectors";


// styled
import {StyledInputWrapper, StyledLabel, StyledCategoryInput, CurrencySelected } from "./SumInput.styled";


const SumInput = ({ control }) => {
  let currency = useSelector(selectUserCurrency)

  return (
      <Controller
        name="sum"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="sum">Sum
              <CurrencySelected>{currency}</CurrencySelected>
            </StyledLabel>
            <StyledCategoryInput
              id="sum"
              type="number"
              placeholder="Enter the sum"
              {...field}
            />
          </StyledInputWrapper>
        )}
      /> 
  );
};


export default SumInput;
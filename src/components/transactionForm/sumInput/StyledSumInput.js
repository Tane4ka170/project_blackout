import React from "react";
import { Controller } from "react-hook-form";

// styled
import {StyledInputWrapper, StyledLabel, StyledCategoryInput } from "./SumInput";


const SumInput = ({ control }) => {
  return (
      <Controller
        name="sum"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="sum">Sum</StyledLabel>
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
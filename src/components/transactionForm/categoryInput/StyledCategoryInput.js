// base
import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

// form
import { Controller } from "react-hook-form";

// components 
import PreSelectType from "components/preSelectType/PreSelectType";

// styled
import {StyledInputWrapper, StyledLabel, StyledCategoryInput } from "./CategoryInput";

const CategoryInput = ({ control }) => {
  const { transactionsType } = useParams();
  const navigate = useNavigate();

  const handleTypeChange = (value) => {
    navigate(`/transactions/${value}`)
    console.log(transactionsType)
  };

  return (
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="category">Category</StyledLabel>
            <StyledCategoryInput
              id="category"
              type="textarea"
              placeholder="Different"
              {...field}
              value=''
              onClick={() => handleTypeChange(PreSelectType(transactionsType))}
            />
          </StyledInputWrapper>
        )}
      />
  );
};


export default CategoryInput;
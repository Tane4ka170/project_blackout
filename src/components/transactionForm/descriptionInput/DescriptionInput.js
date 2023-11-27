import React from "react";
import { Controller } from "react-hook-form";

// styled
import { StyledInputWrapper, StyledLabel, StyledDescriptionInput } from "./DescriptionInput.styled";

const DescriptionInput = ({ control }) => {
  return (
      <Controller
        name="desc"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="desc">Comment</StyledLabel>
            <StyledDescriptionInput
              id="desc"
              type="textarea"
              rows='4'
              placeholder="Enter the text"
              {...field}
            />
          </StyledInputWrapper>
        )}
      />
  );
};


export default DescriptionInput;
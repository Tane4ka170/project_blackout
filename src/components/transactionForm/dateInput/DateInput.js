// base
import React from "react";
import { Controller } from "react-hook-form";

// styled
import { StyledWrapper, StyledInputWrapper, StyledLabel, StyledDatePicker, StyledTimePicker } from "./DateInput.styled";

const TransactionDateInput = ({ control }) => {
  return (
    <StyledWrapper>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="date">Date</StyledLabel>
            <StyledDatePicker
              id="date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
            />
          </StyledInputWrapper>
        )}
      />
      <Controller
        name="time"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="time">Time</StyledLabel>
            <StyledTimePicker
              id="time"
              type="time"
              step={1}
              {...field}
            />
          </StyledInputWrapper>
        )}
      />
    </StyledWrapper>
  );
};


export default TransactionDateInput;
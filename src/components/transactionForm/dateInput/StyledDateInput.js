// base
import React from "react";
import { Controller } from "react-hook-form";


// date picker
// import DatePicker from "react-datepicker";

// styled
import { StyledWrapper, StyledInputWrapper, StyledLabel, StyledDatePicker, StyledTimePicker } from "./DateInput";

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
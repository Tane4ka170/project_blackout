// base
import React from "react";
import { Controller } from "react-hook-form";

// styled
import { StyledWrapper, StyledInputWrapper, StyledLabel, StyledDatePicker, StyledTimePicker, StyledSvg } from "./DateInput.styled";

import svg from '../../../images/Sprite.svg'



const TransactionDateInput = ({ control }) => {
  return (
    <StyledWrapper>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <StyledInputWrapper>
            <StyledLabel htmlFor="date">Date
            <StyledSvg width={20} height={20}>
              <use href={svg + '#icon-calendar'} />
            </StyledSvg>
            </StyledLabel>
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
            <StyledLabel htmlFor="time">Time
            <StyledSvg width={20} height={20}>
              <use href={svg + '#icon-clock'} />
              </StyledSvg>
            </StyledLabel>
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
// base
import React from "react";
import { Controller } from "react-hook-form";

// styled
import { StyledWrapper, StyledInputWrapper, StyledLabel, StyledDatePicker, StyledTimePicker, StyledSvg } from "./DateInput.styled";

import svg from '../../../images/Sprite.svg'

const convertDateFormat = (originalDate) => {
  console.log(originalDate);
  const [year, month, day] = originalDate.split("-");
  console.log(year, month, day);
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};


const TransactionDateInput = ({ editData, control }) => {
  console.log(editData.date);

  return (
    <StyledWrapper>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <StyledInputWrapper>
              <StyledLabel htmlFor="date">Date
                <StyledSvg width={16} height={16}>
                  <use href={svg + '#icon-calendar'} />
                </StyledSvg>
              </StyledLabel>
              <StyledDatePicker
                id="date"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                value={editData && editData.date ? convertDateFormat(editData.date) : ""}
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
            <StyledSvg>
              <use href={svg + '#icon-clock'} />
              </StyledSvg>
            </StyledLabel>
            <StyledTimePicker
              id="time"
              type="time"
              step={1}
              // value={editData?.time}
              {...field}
            />
          </StyledInputWrapper>
        )}
        />
    </StyledWrapper>
  );
};


export default TransactionDateInput;
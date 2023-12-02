// base
import React, {useState, useEffect} from "react";
import { Controller } from "react-hook-form";

// styled
import { StyledWrapper, StyledInputWrapper, StyledLabel, StyledDatePicker, StyledTimePicker, StyledSvg } from "./DateInput.styled";

import svg from '../../../images/Sprite.svg'

const TransactionDateInput = ({ editData, control, datePiker}) => {
  const [defaultDate, setDefaultDate] = useState('');


  function convertDateFormat(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
  }
  
  useEffect(() => {
    if (editData?.date) {
      setDefaultDate(convertDateFormat(editData?.date))
    }
    }, [editData])
    

  // editDate();

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
                onChange={(date) => {
                  setDefaultDate(convertDateFormat(date))
                  datePiker(convertDateFormat(date))
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                value={defaultDate}
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
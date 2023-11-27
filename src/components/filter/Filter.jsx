import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { selectFilter, selectStartDate } from 'redux/filter/filterSelector';
import {
  DIV,
  DivDatePicker,
  INP,
  Label,
  StyledDatePicker,
  SvgI,
} from './Filter.styled';
import { setFilter, setStartDate } from 'redux/filter/filterSlice';
import svg from '../../images/Sprite.svg';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const day = selectedDate.getDate();
      console.log(day, month, year);
      dispatch(setStartDate({ year, month, day }));
    }
  };

  return (
    <DIV>
      <Label>
        <INP
          placeholder="Search for anything.."
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
        <SvgI width={20} height={20}>
          <use href={svg + '#icon-search'}></use>
        </SvgI>
      </Label>
      <DivDatePicker>
        <StyledDatePicker
          selected={selectedDate}
          value={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
        />
        <SvgI width={20} height={20}>
          <use href={svg + '#icon-calendar'}></use>
        </SvgI>
      </DivDatePicker>
    </DIV>
  );
};

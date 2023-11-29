import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

import { selectFilter, selectStartDate } from 'redux/filter/filterSelector';
import { setFilter, setStartDate } from 'redux/filter/filterSlice';

import {
  DIV,
  DivDatePicker,
  Form,
  INP,
  StyledDatePicker,
  SvgI,
} from './Filter.styled';
import svg from '../../images/Sprite.svg';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const dispatch = useDispatch();

  const [tempFilter, setTempFilter] = useState(filter);

  const onFilterChange = e => {
    setTempFilter(e.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    if (date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dispatch(setStartDate({ year, month, day }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilter(tempFilter));
  };

  return (
    <DIV>
      <Form onSubmit={handleSubmit}>
        <label>
          <INP
            placeholder="Search for anything.."
            type="text"
            value={tempFilter}
            onChange={onFilterChange}
          />
          <button type="submit">
            <SvgI width={20} height={20}>
              <use href={svg + '#icon-search'}></use>
            </SvgI>
          </button>
        </label>
      </Form>
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

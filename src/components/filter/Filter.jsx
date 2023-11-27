import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import { selectFilter, selectStartDate } from 'redux/filter/filterSelector';
import { setFilter, setStartDate } from 'redux/filter/filterSlice';
import { DIV, DivDatePicker, INP, StyledDatePicker } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = date => {
    console.log(date);
    setSelectedDate(date);
    if (selectedDate) {
      // Отримайте числове представлення дати
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1; // Місяці у JavaScript починаються з 0
      const day = selectedDate.getDate();
      dispatch(setStartDate({ year, month, day }));

      // Використовуйте year, month і day за необхідності
      console.log('Selected date:', `${year}-${month}-${day}`);
    }
  };

  // const onDateChange = date => {
  //   console.log(date);
  //   dispatch(setStartDate(date));
  // };

  return (
    <DIV>
      <label>
        <INP
          placeholder="Search for anything.."
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
      <DivDatePicker>
        <StyledDatePicker
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
        />
      </DivDatePicker>
    </DIV>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { selectFilter, selectStartDate } from 'redux/filter/filterSelector';
import { setFilter, setStartDate } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const onDateChange = date => {
    dispatch(setStartDate(date));
  };

  return (
    <div>
      <label>
        <input
          placeholder="Search for anything.."
          type="text"
          value={filter}
          onChange={onFilterChange}
        />
      </label>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
      />
    </div>
  );
};

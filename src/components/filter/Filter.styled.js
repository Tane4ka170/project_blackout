import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  padding: 15px 30px;
  width: auto;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.2);

  background-color: transparent;
  color: rgba(250, 250, 250, 0.4);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:hover {
    border-color: #0ef387;
  }
  &:focus {
    border-color: #0ef387;
  }
`;

export const DIV = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin: 0 20px;
  margin-bottom: 20px;
  @media (max-width: 767.98px) {
    height: 110px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-left: 32px;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    margin-left: 40px;
  }
`;

export const INP = styled.input`
  display: inline-flex;
  width: 100%;
  padding: 15px 30px;
  align-items: center;
  gap: 71px;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0);
  background: #0c0d0d;

  color: rgba(250, 250, 250, 0.4);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  outline: none;
  transition: border-color 250ms ease-in-out;

  &:hover {
    border: 1px solid #0ef387;
  }
  &:focus {
    border: 1px solid #0ef387;
  }

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const SvgI = styled.svg`
  position: absolute;
  top: 15px;
  right: 30px;
  stroke: #0ef387;
  fill: none;
`;

export const DivDatePicker = styled.div`
  position: relative;
  .react-datepicker-wrapper {
    /* position: absolute;
    bottom: 0; */
    /* height: 36px; */
  }

  .react-datepicker {
    width: 222px;

    padding: 0 14px;
    padding-bottom: 14px;
    box-sizing: border-box;

    border: none;
    background-color: #0ef387;
  }

  .react-datepicker__month-container {
    width: 194px;
    box-sizing: border-box;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__navigation {
    overflow: visible;
  }

  .react-datepicker__header {
    background-color: #0ef387;
    /* width: 222px; */
    padding: 14px 0;

    box-sizing: border-box;
    margin-bottom: 39px;
    border-color: rgba(12, 13, 13, 0.5);
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #0c0d0d;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.32px;
  }

  .react-datepicker__navigation,
  .react-datepicker__navigation--next {
    width: 4px;
    height: 8px;
    border-color: #0c0d0d;
  }

  .react-datepicker__navigation--next {
    right: 14px;
    top: 19px;
  }

  .react-datepicker__navigation--previous {
    left: 14px;
    top: 19px;
  }

  .react-datepicker__day-names {
    display: flex;
    gap: 11px;

    position: absolute;
    top: 55px;

    color: rgba(12, 13, 13, 0.5);
  }

  .react-datepicker__week {
    display: flex;
    gap: 12px;

    justify-content: center;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 18px;
    max-height: 20px;
    margin: 0;

    color: inherit;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    transition: transform 250ms ease-in-out;

    &:hover {
      background-color: #0ef387;
      transform: scale(2);
    }
  }

  .react-datepicker__day-name:hover {
    transform: scale(1);
    /* pointer-events: ; */
  }

  /* selected day */
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #0ef387;
    border-radius: 0;
    border-bottom: 2px solid #0c0d0d;
  }

  /* actual day */
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #0ef387;
    border-bottom: 2px solid #0c0d0d;
    border-radius: 0;
  }

  /* nav arrow */
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #0c0d0d;
    width: 6px;
    height: 6px;
  }

  /* from input to form arrow */
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after {
    border-top-color: #0ef387;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: #0ef387;
  }
`;

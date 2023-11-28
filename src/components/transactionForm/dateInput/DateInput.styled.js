import styled from "styled-components";
import DatePicker from "react-datepicker";




export const StyledSvg = styled.svg`
position: absolute;
width: 20px;
height: 20px;
bottom: 13px;
right: 14px;
stroke: #FAFAFA;
fill: #171719;

  @media only screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    bottom: 14px;
    right: 18px;
  }
`

// wrappers
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;

  @media only screen and (min-width: 768px) {
    gap: 20px;
    height: 75px;
  }
`

// label
export const StyledLabel = styled.label`
  color: #FAFAFA;
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  `

// date input
export const StyledDatePicker = styled(DatePicker)`
  width: 140px;
  height: 42px;
  padding: 12px 35px 12px 12px;
      
  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;
  
  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);
  
  outline: none;
  box-sizing: border-box;
  
  transition: border-color 250ms ease-in-out;
  
  &:focus {
    border-color: #0EF387;
  }

  @media only screen and (min-width: 768px ) {
    width: 232px;
    height: 48px;
    padding: 12px 45px 12px 12px;
  }
  `

// time input
export const StyledTimePicker = styled.input`
  width: 140px;
  height: 42px;
  padding: 12px 35px 12px 12px;
  
  border: 1px solid rgba(250, 250, 250, 0.20);
  border-radius: 12px;
  
  background-color: transparent;
  color: rgba(250, 250, 250, 0.40);
  
  outline: none;
  box-sizing: border-box;
  
  transition: border-color 250ms ease-in-out;
  
  &:focus {
    border-color: #0EF387;
  }
  
  &[type='time']::-webkit-calendar-picker-indicator {
    display: none;
  }

    @media only screen and (min-width: 768px) {
    width: 232px;
    height: 48px;
    padding: 12px 45px 12px 12px;
  }
  `
// datePickerCalendar
  
  export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    position: relative;
    width: 140px;
  
    @media only screen and (min-width: 768px) {
    gap: 8px;
    width: 235px;
  }
  
    /* date-picker */

    .react-datepicker-wrapper {
      position: absolute;
      bottom: 0;
    }
  
    .react-datepicker {
      width: 222px;
  
      padding: 0 14px;
      padding-bottom: 14px;
      box-sizing: border-box;
  
      border: none;
      background-color: #0EF387;
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
      background-color: #0EF387;
      /* width: 222px; */
      padding: 14px 0;
      
      box-sizing: border-box;
      margin-bottom: 39px;
      border-color: rgba(12, 13, 13, 0.50);
    }
    
    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
      color: #0C0D0D;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: -0.32px;
    }
  
    .react-datepicker__navigation, .react-datepicker__navigation--next {
      width: 4px;
      height: 8px;
      border-color: #0C0D0D;
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
      
      color: rgba(12, 13, 13, 0.50);
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
    
    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
      width: 18px;
      max-height: 20px;
      margin: 0;
      
      color: inherit;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.02em;
      transition: transform 250ms ease-in-out;
  
      &:hover {
        background-color: #0EF387;
        transform: scale(2);
      }
    }
  
    .react-datepicker__day-name:hover {
      transform: scale(1);
      /* pointer-events: ; */
    }
  
    /* selected day */
    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
      background-color: #0EF387;
      border-radius: 0;
      border-bottom: 2px solid #0C0D0D;
    }
  
    /* actual day */
    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
      background-color: #0EF387;
      border-bottom: 2px solid #0C0D0D;
      border-radius: 0;
    }
  
    /* nav arrow */
    .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
      border-color: #0C0D0D;
      width: 6px;
      height: 6px;
    }
    
    
    /* from input to form arrow */
    .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {
      border-top-color: #0EF387;
    }
    
    .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
      border-bottom-color: #0EF387;
    }
    
    `
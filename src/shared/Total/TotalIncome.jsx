// base
import React from "react";

// selector
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";
import { selectIsLoggedIn } from "redux/auth/selectors.js";
// svg
import arrow from '../../images/Sprite.svg'

// components
import Currency from './Currency'


// styled 
import { StyledWrapper, StyledSvgWrapper, StyledSvg, StyledHeaders, StyledMoney, StyledTotalWrapper } from "./StyledTotal";





const TotalIncome = () => {
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  
  let totalIncome = user?.transactionsTotal?.incomes
  let currency = Currency(user.currency)

  const MockData = () => {
    if (!isLoggedIn) {
      currency = '$'
      totalIncome = '12.000'
      return `${currency}${totalIncome}`
    }
    return `${currency}${totalIncome}`
  }

  // function that put dot if sum have more than 3 digits
  const formatNumber = () => {
    const inputString = totalIncome?.toString();
    const isLessThanFourDigits = inputString?.length < 4;

    return isLessThanFourDigits
      ? inputString
      : inputString?.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  };

  // styles for mock-data
  const wrapperStyle = {
    backgroundColor: isLoggedIn ? '#171719' : '#FAFAFA',
  };

  const headerStyle = {
    color: isLoggedIn ? '#FAFAFA80' : '#11101C80',
  };

  const moneyStyle = {
    color: isLoggedIn ? '#FAFAFA' : '#11101C',
  };

  return (
    <StyledWrapper style={wrapperStyle}>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-UP'} />
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders style={headerStyle}>Total income</StyledHeaders>
        <StyledMoney style={moneyStyle}>{isLoggedIn ? `${currency}${formatNumber()}` : MockData()}</StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
};




export default TotalIncome;
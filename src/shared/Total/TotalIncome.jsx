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
  

  const MockData = () => {
    let totalIncome = user?.transactionsTotal?.incomes
    let currency = Currency(user.currency)
    if (!isLoggedIn) {
      currency = '$'
      totalIncome = '12.000'
      return `${currency}${totalIncome}`
    }
    return `${currency}${totalIncome}`
  }

  return (
    <StyledWrapper>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-UP'}/>
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders>Total income</StyledHeaders>
        <StyledMoney>{MockData()}</StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
};




export default TotalIncome;
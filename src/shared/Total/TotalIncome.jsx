// base
import React from "react";

// selector
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";

// svg
import arrow from '../../images/Sprite.svg'

// components
import Currency from './Currency'


// styled 
import { StyledWrapper, StyledSvgWrapper, StyledSvg, StyledHeaders, StyledMoney, StyledTotalWrapper } from "./StyledTotal";


const TotalIncome = () => {
  const user = useSelector(selectUser)

  const totalIncome = user?.transactionsTotal?.incomes
  const currency = Currency(user.currency)

  return (
    <StyledWrapper>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-UP'}/>
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders>Total income</StyledHeaders>
        <StyledMoney>{`${currency}${totalIncome}`}</StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
};




export default TotalIncome;
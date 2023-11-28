// base
import React from "react";

// selector
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/selectors";

// svg
import arrow from '../../images/Sprite.svg';

// components
import Currency from './Currency'

// styled
import { StyledWrapper, StyledSvgWrapper, StyledSvg, StyledHeaders, StyledMoney, StyledTotalWrapper } from "./StyledTotal";


const TotalExpense = () => {
  const user = useSelector(selectUser)

  const totalExpense = user?.transactionsTotal?.expenses
  const currency = Currency(user.currency)

    const formatNumber = () => {
    const inputString = totalExpense?.toString();
    const isLessThanFourDigits = inputString?.length < 4;

    return isLessThanFourDigits
      ? inputString
      : inputString?.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
  };

  return (
    <StyledWrapper>
      <StyledSvgWrapper>
        <StyledSvg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-DWN'}/>
        </StyledSvg>
      </StyledSvgWrapper>
      <StyledTotalWrapper>
        <StyledHeaders>Total expense</StyledHeaders>
        <StyledMoney>{`${currency}${formatNumber()}`}</StyledMoney>
      </StyledTotalWrapper>
    </StyledWrapper>
  );
}


export default TotalExpense;
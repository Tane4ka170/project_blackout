// base
import React from "react";

// svg
import arrow from '../../images/Sprite.svg'

// components
import Currency from "components/currency/Currency";


// styled 
import { StyledWrapper, StyledSvgWrapper, StyledSvg, StyledHeaders, StyledMoney, StyledTotalWrapper } from "./StyledTotal";



const TotalIncome = () => {
  // Место под юзСелектор но пока нету что селектить)
  const totalIncome = 650
  const currency = Currency('uah')

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
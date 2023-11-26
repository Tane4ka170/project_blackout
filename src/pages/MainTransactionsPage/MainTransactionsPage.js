// base
import React from "react";

// components
import { TotalIncome, TotalExpense } from "shared/Total";
import OperationForm from "shared/OperationForm/OperationForm";
import DoughnutComponent from "components/doughnut/Doughnut";

// styled
import { StyledHeaders, StyledSection, StyledText, StyledHeadersWrapper, StyledTotalUl, StyledMain } from "./MainTransactionsPage.styled";


const MainTransactionsPage = () => {

  return (
    <StyledSection>
      <StyledHeadersWrapper>
        <StyledHeaders>Expense log</StyledHeaders>
        <StyledText>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</StyledText>
      </StyledHeadersWrapper>
      <StyledTotalUl>
        <li>
          <TotalIncome />
        </li>
        <li>
          <TotalExpense />
        </li>
      </StyledTotalUl>
      <StyledMain>
          <OperationForm />
        <div>
          <DoughnutComponent/>
        </div>
      </StyledMain>
    </StyledSection>
  );
};

export default MainTransactionsPage
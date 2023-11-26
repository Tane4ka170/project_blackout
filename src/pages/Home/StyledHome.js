// base
import React from "react";

// components
import { TotalIncome, TotalExpense } from "shared/Total";
import OperationForm from "shared/OperationForm/StyledOperationForm";

// styled
import { StyledHeaders, StyledSection, StyledText, StyledHeadersWrapper, StyledTotalUl, StyledMain } from "./Home";


const Home = () => {

  return (
    <StyledSection>
      <StyledHeadersWrapper>
        <StyledHeaders>Expense log</StyledHeaders>
        <StyledText>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</StyledText>
      </StyledHeadersWrapper>
      <StyledTotalUl>
        <li>
          {/* Тут будет компонент Total Income */}
          <TotalIncome />
        </li>
        <li>
          {/* Тут будет компонент Total Expense */}
          <TotalExpense />
        </li>
      </StyledTotalUl>
      <StyledMain>
          {/*  тут буде Form for login expense or income */}
          <OperationForm />
        <div>
          {/* и будет Donut  */}
        </div>
      </StyledMain>
    </StyledSection>
  );
};

export default Home
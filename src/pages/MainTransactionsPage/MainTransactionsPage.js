// base
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// components
import { TotalIncome, TotalExpense } from 'shared/Total';
import OperationForm from 'shared/OperationForm/OperationForm';
import DoughnutComponent from 'components/doughnut/Doughnut';

// styled
import {
  StyledHeaders,
  StyledSection,
  StyledText,
  StyledHeadersWrapper,
  StyledTotalUl,
  StyledMain,
  StyledWrapper,
} from './MainTransactionsPage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const MainTransactionsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isNotDesktop = useMediaQuery({ query: '(max-width: 1439.98px' });

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <StyledSection>
      {isNotDesktop && (
        <>
          <StyledHeadersWrapper>
            <StyledHeaders>Expense log</StyledHeaders>
            <StyledText>
              Capture and organize every penny spent with ease! A clear view of
              your financial habits at your fingertips.
            </StyledText>
          </StyledHeadersWrapper>
          <StyledTotalUl>
            <li>
              <TotalIncome />
            </li>
            <li>
              <TotalExpense />
            </li>
          </StyledTotalUl>
          <OperationForm />
          <StyledMain>
            <DoughnutComponent />
          </StyledMain>
        </>
      )}
      {isDesktop && (
        <>
          <StyledWrapper>
            <StyledHeadersWrapper>
              <StyledHeaders>Expense log</StyledHeaders>
              <StyledText>
                Capture and organize every penny spent with ease! A clear view
                of your financial habits at your fingertips.
              </StyledText>
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
              <DoughnutComponent />
            </StyledMain>
          </StyledWrapper>
          <OperationForm />
        </>
      )}
    </StyledSection>
  );
};

export default MainTransactionsPage;

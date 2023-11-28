// base
import React, { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

// selectors
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors.js";

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

// framer animation
import { motion } from 'framer-motion';

// thunk's
import { getTransactionsThunk } from "redux/transactions/operations";


const MainTransactionsPage = () => {
  // adaptive design
  const isNotDesktop = useMediaQuery({ query: '(max-width: 1439.98px' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })


  
  // dispatch to get all transactions
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getTransactionsThunk({type: 'expenses', date: ''}))
    }
    
  }, [dispatch, isLoggedIn])

  return (
    <StyledSection>
      {isNotDesktop && (
        <>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <StyledHeadersWrapper>
              <StyledHeaders>Expense log</StyledHeaders>
              <StyledText>
                Capture and organize every penny spent with ease! A clear view of
                your financial habits at your fingertips.
              </StyledText>
            </StyledHeadersWrapper>
          </motion.div>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <StyledTotalUl>
              <li>
                <TotalIncome />
              </li>
              <li>
                <TotalExpense />
              </li>
            </StyledTotalUl>
          </motion.div>
          <OperationForm />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <StyledMain>
              <DoughnutComponent />
            </StyledMain>
          </motion.div>
        </>
      )}
      {isDesktop && (
        <>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
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
            </motion.div>
          <OperationForm />
        </>
      )}
    </StyledSection>
  );
};

export default MainTransactionsPage;

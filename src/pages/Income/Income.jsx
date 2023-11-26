import { Filter } from 'components/filter/Filter';
import { selectFilter, selectStartDate } from 'redux/filter/filterSelector';
import {
  deleteTransactionThunk,
  getTransactionsThunk,
} from 'redux/transactions/operations';
import { selectTransaction } from 'redux/transactions/selectors';
import { SectionTransaction } from 'components/sectionTransactionList/sectionTransaction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  DIV,
  DIVL,
  DIVMAIN,
  DIVTR,
  DelBtn,
  EditBtn,
  H2,
  LI,
  P1,
  P2,
  P3,
  P4,
  P5,
  PH,
  TransactionsContainer,
  ULL,
} from './Income.styled';
import { TotalExpense, TotalIncome } from 'shared/Total';

export const Income = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);

  useEffect(() => {
    dispatch(getTransactionsThunk({ type: 'incomes', date: startDate }));
  }, [dispatch, filter, startDate]);

  const handleDelete = (transactionId, transactionComment) => {
    console.log(transactionId);
    dispatch(
      deleteTransactionThunk({
        type: 'incomes',
        id: transactionId,
      })
    );
    toast.success(`Transaction ${transactionComment} was deleted`);
  };

  // const filterContacts = transactions.filter(
  //   transaction =>
  //     transaction.category.categoryName
  //       .toLowerCase()
  //       .trim()
  //       .includes(filter.toLowerCase().trim()) ||
  //     transaction.comment
  //       .toLowerCase()
  //       .trim()
  //       .includes(filter.toLowerCase().trim())
  // );

  return (
    <div>
      <DIVMAIN>
        <DIVL>
          <H2>All Income</H2>
          <PH>
            Track and celebrate every bit of earnings effortlessly! Gain
            insights into your total revenue in a snap.
          </PH>
        </DIVL>

        <ULL>
          <LI>
            <TotalIncome />
          </LI>
          <LI>
            <TotalExpense />
          </LI>
        </ULL>
      </DIVMAIN>
      <DIVTR>
        <Filter />
        <SectionTransaction />
        <TransactionsContainer>
          {transactions.map(transaction => (
            <DIV key={transaction._id}>
              <P1>{transaction.category.categoryName}</P1>
              <P2>{transaction.comment}</P2>
              <P3>{transaction.date}</P3>
              <P4>{transaction.time}</P4>
              <P5>{transaction.sum} / UAH</P5>
              <EditBtn>Edit</EditBtn>
              <DelBtn
                onClick={() =>
                  handleDelete(transaction._id, transaction.comment)
                }
              >
                Delete
              </DelBtn>
            </DIV>
          ))}
        </TransactionsContainer>
      </DIVTR>
    </div>
  );
};

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
  DIV,
} from 'pages/Income/Income.styled';
import { TotalExpense, TotalIncome } from 'shared/Total';

export const Expense = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);
  console.log(transactions);

  useEffect(() => {
    dispatch(getTransactionsThunk({ type: 'expenses', date: startDate }));
  }, [dispatch, filter, startDate]);

  const handleDelete = (transactionId, transactionComment) => {
    console.log(transactionId);
    dispatch(
      deleteTransactionThunk({
        type: 'expenses',
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
          <H2>All Expense</H2>
          <PH>
            View and manage every transaction seamlessly! Your entire financial
            landscape, all in one place.
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
              <P5>{transaction.sum}</P5>
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

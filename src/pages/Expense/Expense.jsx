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
  PEr,
  DIV375,
} from 'pages/Income/Income.styled';
import { TotalExpense, TotalIncome } from 'shared/Total';
import svg from '../../images/Sprite.svg';

export const Expense = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);
  const date = useSelector(selectStartDate);

  console.log(date);
  const formattedDate = `${date.year}-${String(date.month).padStart(
    2,
    '0'
  )}-${String(date.day).padStart(2, '0')}`;

  console.log(formattedDate);

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

  const filterTransactions = transactions.filter(transaction =>
    transaction.comment
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim())
  );

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
        <DIV375>
          <SectionTransaction />
          {filterTransactions.length ? (
            <TransactionsContainer>
              {transactions.map(transaction => (
                <DIV key={transaction._id}>
                  <P1>{transaction.category.categoryName}</P1>
                  <P2>{transaction.comment}</P2>
                  <P3>{transaction.date}</P3>
                  <P4>{transaction.time}</P4>
                  <P5>{transaction.sum}</P5>
                  <EditBtn>
                    <svg width={16} height={16}>
                      <use href={svg + '#icon-edit-2'}></use>
                    </svg>
                    <span>Edit</span>
                  </EditBtn>
                  <DelBtn
                    onClick={() =>
                      handleDelete(transaction._id, transaction.comment)
                    }
                  >
                    <svg width={16} height={16}>
                      <use href={svg + '#icon-trash-2'}></use>
                    </svg>
                    <span>Delete</span>
                  </DelBtn>
                </DIV>
              ))}
            </TransactionsContainer>
          ) : null}
          {filter.trim().length > 0 && !filterTransactions.length && (
            <PEr>We couldn't find any transactions matching your request.</PEr>
          )}
        </DIV375>
      </DIVTR>
    </div>
  );
};

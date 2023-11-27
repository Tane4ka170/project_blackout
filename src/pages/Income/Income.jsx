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
  DIV375,
  DIVL,
  DIVMAIN,
  DIVTR,
  DelBtn,
  EditBtn,
  H2,
  LI,
  MainWr,
  P1,
  P2,
  P3,
  P4,
  P5,
  PEr,
  PH,
  TransactionsContainer,
  ULL,
} from './Income.styled';
import { TotalExpense, TotalIncome } from 'shared/Total';
import svg from '../../images/Sprite.svg';

export const Income = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const transactions = useSelector(selectTransaction);
  const date = useSelector(selectStartDate);

  const formattedDate = `${date.year}-${String(date.month).padStart(
    2,
    '0'
  )}-${String(date.day).padStart(2, '0')}`;
  console.log(formattedDate);

  useEffect(() => {
    // const nowDate = new Date();
    // if (!date) {
    //   const year = nowDate.getFullYear();
    //   const month = nowDate.getMonth() + 1;
    //   const day = nowDate.getDate();
    //   dispatch(
    //     getTransactionsThunk({ type: 'incomes', date: { year, month, day } })
    //   );
    // }
    dispatch(getTransactionsThunk({ type: 'incomes', date: formattedDate }));
  }, [dispatch, filter, formattedDate, date]);

  const handleDelete = (transactionId, transactionComment) => {
    dispatch(deleteTransactionThunk(transactionId));
    toast.success(`Transaction ${transactionComment} was deleted`);
  };

  const filterTransactions = transactions.filter(transaction =>
    transaction.comment
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim())
  );

  return (
    <MainWr>
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
        <DIV375>
          <SectionTransaction />
          {filterTransactions?.length ? (
            <TransactionsContainer>
              {transactions?.map(transaction => (
                <DIV key={transaction._id}>
                  <P1>{transaction.category.categoryName}</P1>
                  <P2>{transaction.comment}</P2>
                  <P3>{transaction.date}</P3>
                  <P4>{transaction.time}</P4>
                  <P5>{transaction.sum} / UAH</P5>
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
    </MainWr>
  );
};

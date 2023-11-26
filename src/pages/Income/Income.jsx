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
import { DIVL, DIVMAIN, DIVTR, H2, PH } from './Income.styled';

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

  const filterContacts = transactions.filter(
    transaction =>
      transaction.category.categoryName
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim()) ||
      transaction.comment
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim())
  );

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
        <div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </DIVMAIN>
      <DIVTR>
        <Filter />
        <SectionTransaction />
        <div>
          {transactions.map(transaction => (
            <div key={transaction._id}>
              <p>{transaction.category.categoryName}</p>
              <p>{transaction.comment}</p>
              <p>{transaction.date}</p>
              <p>{transaction.time}</p>
              <p>{transaction.sum}</p>
              <button>Edit</button>
              <button
                onClick={() =>
                  handleDelete(transaction._id, transaction.comment)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </DIVTR>
    </div>
  );
};

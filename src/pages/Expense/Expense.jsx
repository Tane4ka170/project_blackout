import { Filter } from 'components/filter/Filter';
import {
  selectFilter,
  selectStartDate,
} from 'components/redux/filter/filterSelector';
import { getTransactionsThunk } from 'components/redux/transactions/operations';
import { selectTransaction } from 'components/redux/transactions/selectors';
import { SectionTransaction } from 'components/sectionTransactionList/sectionTransaction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Expense = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const startDate = useSelector(selectStartDate);
  const transactions = useSelector(selectTransaction);

  useEffect(() => {
    dispatch(getTransactionsThunk({ type: 'expenses', date: startDate }));
  }, [dispatch, filter, startDate]);

  return (
    <div>
      <div>
        <h1>All Expense</h1>
        <p>
          View and manage every transaction seamlessly! Your entire financial
          landscape, all in one place.
        </p>
      </div>
      <div>
        <Filter />
      </div>
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
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

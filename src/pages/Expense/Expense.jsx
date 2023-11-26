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

  return (
    <div>
      <div>
        <h2>All Expense</h2>
        <p>
          View and manage every transaction seamlessly! Your entire financial
          landscape, all in one place.
        </p>
      </div>
      <div></div>
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
            <button
              onClick={() => handleDelete(transaction._id, transaction.comment)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

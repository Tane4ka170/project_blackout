import { createTransactionThunk } from "redux/transactions/operations";
const onSubmitTransaction = (data, transactionsType, categoryId ,dispatch) => {
  let transaction = data;
  // set transaction type
  transaction.type = transactionsType;

  // set category id
  transaction.category = categoryId;

  // set proper time
  transaction.time = data.time.slice(0, 5);


  // auto select current date
  if (data.date === '') {
    transaction.date = new Date().toISOString().substr(0, 10)
  } else {
    transaction.date = data.date.toISOString().substr(0, 10)
  }
  if (data.time === '' || data.time === '00:00:00') {
    transaction.time = new Date().toTimeString().substr(0, 8)
  }

  console.log(transaction.time);

  // dispatch
  dispatch(createTransactionThunk(transaction))
};
  
export default onSubmitTransaction

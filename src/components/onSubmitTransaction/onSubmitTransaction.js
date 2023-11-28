import { createTransactionThunk } from "redux/transactions/operations";
const onSubmitTransaction = (data, transactionsType, categoryId, dispatch, reset) => {
  let transaction = data;
  // set transaction type
  transaction.type = transactionsType;

  // set category id
  transaction.category = categoryId;

  // set proper time
  transaction.time = data.time.slice(0, 5);


  // auto select current date
  if (data.date === '') {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    transaction.date = formattedDate;
  } else {
    if (data.date) {
      const year = data.date.getFullYear();
      const month = data.date.getMonth() + 1;
      const day = data.date.getDate();
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      transaction.date = formattedDate;
    };
    console.log(transaction.date);
  }
  if (data.time === '' || data.time === '00:00') {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    transaction.time = formattedTime;
  }
  // dispatch and reset form
  dispatch(createTransactionThunk(transaction, reset))
  reset();
};
  
export default onSubmitTransaction

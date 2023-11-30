import { createTransactionThunk, updateTransactionThunk } from "redux/transactions/operations";

const onSubmitTransaction = (data, transactionsType, categoryId, dispatch, reset, editData, datePicker) => {
  console.log(data);
  let transaction = data;
  // set transaction type
  transaction.type = transactionsType;

  // set  id's
  if (!editData) {
    transaction.category = categoryId;
  } else { 
    transaction.category = editData.category._id
    transaction._id = editData._id;
  }

  // set proper time
  transaction.time = data.time.slice(0, 5);


  transaction.date = datePicker;
  console.log(transaction.date);

  // auto select current date
  // if (data.date === '' || data.date === '0000-00-00') {
  //   console.log(data.date);
  //   console.log(1);
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = (now.getMonth() + 1).toString().padStart(2, '0');
  //   const day = now.getDate().toString().padStart(2, '0');
  //   const formattedDate = `${year}-${month}-${day}`;
  //   transaction.date = formattedDate;
  // } else {
  //     const year = data.date.getFullYear();
  //     const month = data.date.getMonth() + 1;
  //     const day = data.date.getDate();
  //     const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  //     transaction.date = formattedDate;
  // }
  if (data.time === '' || data.time === '00:00') {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    transaction.time = formattedTime;
  }
  // dispatch and reset form
  if (!editData) {
    dispatch(createTransactionThunk(transaction))
    reset();
  } else {
    console.log(transaction);
    dispatch(updateTransactionThunk(transaction))
    reset();
  };
};

export default onSubmitTransaction

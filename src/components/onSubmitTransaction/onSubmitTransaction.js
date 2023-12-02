import { createTransactionThunk, updateTransactionThunk } from "redux/transactions/operations";


const onSubmitTransaction = (data, transactionsType, categoryId, dispatch, reset, editData, datePicker) => {
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

  // convert datePicker to proper format
  function convertDateFormat(inputDate) {
  const parts = inputDate.split('/');
  const day = parts[0].padStart(2, '0');
  const month = (parts[1]).toString().padStart(2, '0');
  const year = parts[2];
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
  }

  if (editData) {
    if (editData.date === datePicker) {
      transaction.date = editData.date;
    } else {
      transaction.date = convertDateFormat(datePicker);
    }
  } else {
    // auto select current date
    if (datePicker === '') {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      transaction.date = formattedDate;
    } else {
      let [day, month, year] = datePicker.split('/');
      day = day.padStart(2, '0');
      month = month.toString().padStart(2, '0');
      console.log(day);
      console.log(month);
      const formattedDate = `${year}-${month}-${day}`;
      transaction.date = formattedDate;
    }
  }

  // auto select current time
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
    dispatch(updateTransactionThunk(transaction))
    reset();
  };
};

export default onSubmitTransaction


const onSubmitTransaction = (data, transactionsType) => {
  let transaction = data;
  transaction.type = transactionsType
  if (data.date === '') {
    transaction.date = new Date().toISOString().substr(0, 10)
  } else {
    transaction.date = data.date.toISOString().substr(0, 10)
  }
  if (data.time === '' || data.time === '00:00:00') {
    transaction.time = new Date().toTimeString().substr(0, 8)
  }
  console.log(transaction);
};
  
export default onSubmitTransaction
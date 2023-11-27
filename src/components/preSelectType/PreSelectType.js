
const PreSelectType = transactionsType => {
  switch (transactionsType) {
    case 'expenses':
      return 'expenses'
    case 'incomes':
      return 'incomes'
    default:
      return 'expenses'
  };
};


export default PreSelectType;
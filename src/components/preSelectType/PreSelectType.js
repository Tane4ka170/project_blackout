
const PreSelectType = transactionsType => {
  switch (transactionsType) {
    case 'expense':
      return 'expense'
    case 'income':
      return 'income'
    default:
      return 'expense'
  };
};


export default PreSelectType;
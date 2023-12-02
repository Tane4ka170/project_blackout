export const selectTransaction = state => state.transaction.transactions;
export const selectExpenses = state => state.transaction.transactions.expenses;
export const selectLoading = state => state.user.loading;
export const selectError = state => state.user.error;

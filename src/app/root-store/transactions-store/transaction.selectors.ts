import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState, getError } from '../status-store/status.reducer';
import { transactionsFeatureKey, TransactionState, selectAll } from './transaction.reducer';

export const selectTransactionsState = createFeatureSelector<TransactionState>(transactionsFeatureKey);

// Select transactions
export const selectTransactions = createSelector(selectTransactionsState, selectAll);

// Loading
export const selectTransactionsLoading = createSelector(
	selectTransactionsState,
	(state: TransactionState) => state.statusState === LoadingState.LOADING
);

// Error
export const selectTransactionsError = createSelector(selectTransactionsState, (state: TransactionState) =>
	getError(state.statusState)
);

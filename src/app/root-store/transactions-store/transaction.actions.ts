import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../shared/models/transaction';

// Load latest transactions
export const loadLatestTransactions = createAction('[Transactions Page] Load Latest Transactions Request');
export const loadTransactionsSuccess = createAction(
	'[Transactions API] Load Transactions Success',
	props<{ transactions: Transaction[] }>()
);
export const loadTransactionsFailure = createAction(
	'[Transactions API] Load Transactions Failure',
	props<{ error: any }>()
);

// Load more transactions (based on last row id)
export const loadMoreTransactions = createAction(
	'[Transactions Page] Load More Transactions Request',
	props<{ lastRowId: number }>()
);
export const loadMoreTransactionsSuccess = createAction(
	'[Transactions API] Load More Transactions Success',
	props<{ transactions: Transaction[] }>()
);
export const loadMoreTransactionsFailure = createAction(
	'[Transactions API] Load More Transactions Failure',
	props<{ error: any }>()
);

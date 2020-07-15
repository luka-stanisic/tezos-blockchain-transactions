import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../shared/models/transaction';

// Load latest transactions (first 10)
export const loadLatestTransactions = createAction('[Transactions Page] Load Latest Transactions Request');

// Load older transactions (based on last row id)
export const loadOlderTransactions = createAction(
	'[Transactions Page] Load Older Transactions Request',
	props<{ lastRowId: number }>()
);

// On load success
export const loadTransactionsSuccess = createAction(
	'[Transactions API] Load Transactions Success',
	props<{ transactions: Transaction[] }>()
);

// On load failure
export const loadTransactionsFailure = createAction(
	'[Transactions API] Load Transactions Failure',
	props<{ error: any }>()
);

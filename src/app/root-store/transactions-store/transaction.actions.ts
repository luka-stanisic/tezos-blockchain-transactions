import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../shared/models/transaction;

export const loadLatestTransactions = createAction('[Transactions Page] Load Latest Transactions Request');
export const loadOlderTransactions = createAction('[Transactions Page] Load Latest Transactions Request', props<{ lastRowId: number }>);

export const loadTransactionsSuccess = createAction(
	'[Transactions API] Load Transactions Success',
	props<{ transactions: Transaction[] }>()
);
export const loadTransactionsFailure = createAction(
	'[Transactions API] Load Transactions Failure',
	props<{ error: any }>()
);

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Transaction } from '../../shared/models/transaction;

export const loadTransactions = createAction('[Transactions Page] Load Transactions Request');
export const loadTransactionsSuccess = createAction(
	'[Transactions API] Load Transactions Success',
	props<{ transactions: Transaction[] }>()
);
export const loadTransactionsFailure = createAction(
	'[Transactions API] Load Transactions Failure',
	props<{ error: any }>()
);

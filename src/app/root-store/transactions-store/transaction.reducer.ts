import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TransactionActions from './transaction.actions';
import { LoadingState, StatusState } from '../status-store/status.reducer';

import { Transaction } from 'src/app/shared/models/transaction';

export const transactionsFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
	// additional entities state properties
	statusState: StatusState;
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>({
	selectId: (transaction: Transaction) => transaction.row_id,
});

export const initialState: TransactionState = adapter.getInitialState({
	// additional entity state properties
	statusState: LoadingState.INIT,
});

export const reducer = createReducer(
	initialState,
	// Load Latest Transactions
	on(TransactionActions.loadLatestTransactions, (state, action) => {
		return {
			...state,
			statusState: LoadingState.LOADING,
		};
	}),
	on(TransactionActions.loadLatestTransactionsSuccess, (state, action) =>
		adapter.setAll(action.transactions, {
			...state,
			statusState: LoadingState.LOADED,
		})
	),
	on(TransactionActions.loadLatestTransactionsFailure, (state, action) => {
		return {
			...state,
			statusState: { error: action.error },
		};
	}),

	// Load More Transactions
	on(TransactionActions.loadMoreTransactions, (state, action) => {
		return {
			...state,
			statusState: LoadingState.LOADING,
		};
	}),
	on(TransactionActions.loadMoreTransactionsSuccess, (state, action) => {
		return adapter.addMany(action.transactions, {
			...state,
			statusState: LoadingState.LOADED,
		});
	}),
	on(TransactionActions.loadMoreTransactionsFailure, (state, action) => {
		return {
			...state,
			statusState: { error: action.error },
		};
	})
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

import {
	loadLatestTransactions,
	loadLatestTransactionsFailure,
	loadLatestTransactionsSuccess,
	loadMoreTransactions,
	loadMoreTransactionsFailure,
	loadMoreTransactionsSuccess,
} from './transaction.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { Transaction } from 'src/app/shared/models/transaction';

const rowId = 14849585;
describe('Transactions Actions', () => {
	// Latest transactions
	it('should create loadLatestTransactions action', () => {
		const action = loadLatestTransactions();
		expect(action.type).toEqual(loadLatestTransactions.type);
	});

	it('should create loadLatestTransactionsSuccess action', () => {
		const transactions: Transaction[] = [
			{
				row_id: 14849585,
				time: '1567721704000',
				sender: 'tz1bDXD6nNSrebqmAnnKKwnX1QdePSMCj4MX',
				receiver: 'tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo',
				volume: 8001,
				status: 'applied',
				reward: 0,
				volume_usd: 24850.201887,
				type: 'received',
			},
		];
		const action = loadLatestTransactionsSuccess({ transactions });
		expect(action.type).toEqual(loadLatestTransactionsSuccess.type);
		expect(action.transactions).toEqual(
			jasmine.objectContaining({
				...transactions,
			})
		);
	});

	it('should create loadLatestTransactionsFailure action', () => {
		const error = new HttpErrorResponse({});
		const action = loadLatestTransactionsFailure({ error });

		expect(action.type).toEqual(loadLatestTransactionsFailure.type);
		expect(action.error).toEqual(error);
	});

	// Load more transactions
	it('should create loadMoreTransactions action', () => {
		const action = loadMoreTransactions({ lastRowId: rowId });
		expect(action.type).toEqual(loadMoreTransactions.type);
		expect(action.lastRowId).toEqual(rowId);
	});

	it('should create loadMoreTransactionsSuccess action', () => {
		const transactions: Transaction[] = [
			{
				row_id: 14849585,
				time: '1567721704000',
				sender: 'tz1bDXD6nNSrebqmAnnKKwnX1QdePSMCj4MX',
				receiver: 'tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo',
				volume: 8001,
				status: 'applied',
				reward: 0,
				volume_usd: 24850.201887,
				type: 'received',
			},
		];
		const action = loadMoreTransactionsSuccess({ transactions });
		expect(action.type).toEqual(loadMoreTransactionsSuccess.type);
		expect(action.transactions).toEqual(
			jasmine.objectContaining({
				...transactions,
			})
		);
	});

	it('should create loadMoreTransactionsFailure action', () => {
		const error = new HttpErrorResponse({});
		const action = loadMoreTransactionsFailure({ error });

		expect(action.type).toEqual(loadMoreTransactionsFailure.type);
		expect(action.error).toEqual(error);
	});
});

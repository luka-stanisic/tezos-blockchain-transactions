import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from 'src/app/shared/models/transaction';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class TransactionsService {
	constructor(private http: HttpClient) {}

	getLatestTransactions(): Observable<Transaction[]> {
		const columns = 'row_id,time,sender,receiver,volume,status,reward';
		const type = 'transaction';
		const receiver = environment.userAddress;
		const limit = '20';
		return this.http
			.get<Transaction[]>(
				environment.baseApiUrl +
					`tables/op?
				columns=${columns}&
				type=${type}&
				receiver=${receiver}&
				limit=${limit}`
			)
			.pipe(
				map((transResp: any) => {
					return this.mapTransactionResponse(transResp, columns);
				})
			);
	}

	getMoreTransactions(lastRowId: number): Observable<Transaction[]> {
		const columns = 'row_id,time,sender,receiver,volume,status,reward';
		const type = 'transaction';
		const receiver = environment.userAddress;
		const limit = '10';
		return this.http
			.get<Transaction[]>(
				environment.baseApiUrl +
					`tables/op?
				columns=${columns}&
				type=${type}&
				receiver=${receiver}&
				limit=${limit}&
				cursor.lte=${lastRowId}`
			)
			.pipe(
				map((transResp: any) => {
					return this.mapTransactionResponse(transResp, columns);
				})
			);
	}

	private mapTransactionResponse(transResp: any, columns): Transaction[] {
		return transResp.map((item: any) => {
			const transaction = Transaction.mapToModel(item, columns.split(','));
			transaction.volume_usd = transaction.volume * environment.usdRate;

			// TODO: revise this
			if (transaction.status !== 'applied') {
				transaction.type = 'pending';
			} else {
				if (transaction.reward > 0) {
					transaction.type = 'reward';
				} else if (transaction.sender === environment.userAddress) {
					transaction.type = 'sent';
				} else if (transaction.receiver === environment.userAddress) {
					transaction.type = 'received';
				}
			}

			return transaction;
		});
	}
}

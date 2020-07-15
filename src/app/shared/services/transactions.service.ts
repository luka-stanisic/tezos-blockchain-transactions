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
		const columns = 'row_id,time,type,sender,volume';
		const type = 'transaction';
		const limit = '40';
		return this.http
			.get<Transaction[]>(
				environment.baseApiUrl +
					`tables/op?
				columns=${columns}&
				type=${type}&
				limit=${limit}`
			)
			.pipe(
				map((transResp: any) => {
					return transResp.map((item: any) => {
						return Transaction.mapToModel(item, columns.split(','));
					});
				})
			);
	}

	getOlderTransactions(lastRowId: number): Observable<Transaction[]> {
		const columns = 'row_id,time,type,sender,volume';
		const type = 'transaction';
		const limit = '10';
		return this.http
			.get<Transaction[]>(
				environment.baseApiUrl +
					`tables/op?
				columns=${columns}&
				type=${type}&
				limit=${limit}&
				cursor.lte=${lastRowId}`
			)
			.pipe(
				map((transResp: any) => {
					return transResp.map((item: any) => {
						Transaction.mapToModel(item, columns.split(','));
					});
				})
			);
	}
}

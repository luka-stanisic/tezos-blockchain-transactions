import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from 'src/app/shared/models/transaction';

@Injectable({
	providedIn: 'root',
})
export class CompanyService {
	constructor(private http: HttpClient) {}

	getLatestTransactions(): Observable<Transaction[]> {
		const columns = 'row_id,time,type,sender,volume';
		const type = 'transaction';
		const limit = '10';
		return this.http.get<Transaction[]>(
			environment.baseApiUrl +
				`tables/op?
				columns=${columns}&
				type=${type}&
				limit=${limit}`
		);
	}

	getOlderTransactions(lastRowId: number): Observable<Transaction[]> {
		const columns = 'row_id,time,type,sender,volume';
		const type = 'transaction';
		const limit = '10';
		return this.http.get<Transaction[]>(
			environment.baseApiUrl +
				`tables/op?
				columns=${columns}&
				type=${type}&
				limit=${limit}&
				cursor.lte=${lastRowId}`
		);
	}
}

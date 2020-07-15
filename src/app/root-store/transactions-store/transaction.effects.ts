import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTransactionActions from './transaction.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Injectable()
export class TransactionEffects {
	constructor(private actions$: Actions, private transactionsService: TransactionsService) {}

	loadLatestTransactions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromTransactionActions.loadLatestTransactions),
			mergeMap((action) =>
				this.transactionsService.getLatestTransactions().pipe(
					map((transactions) => fromTransactionActions.loadLatestTransactionsSuccess({ transactions })),
					catchError((error) => of(fromTransactionActions.loadLatestTransactionsFailure({ error })))
				)
			)
		)
	);

	loadMoreTransactions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromTransactionActions.loadMoreTransactions),
			mergeMap((action) =>
				this.transactionsService.getMoreTransactions(action.lastRowId).pipe(
					map((transactions) => fromTransactionActions.loadMoreTransactionsSuccess({ transactions })),
					catchError((error) => of(fromTransactionActions.loadMoreTransactionsFailure({ error })))
				)
			)
		)
	);
}

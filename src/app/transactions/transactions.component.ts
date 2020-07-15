import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Transaction } from '../shared/models/transaction';
import { TransactionState } from '../root-store/transactions-store/transaction.reducer';
import * as transactionActions from '../root-store/transactions-store/transaction.actions';
import * as transactionSelectors from '../root-store/transactions-store/transaction.selectors';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit, OnDestroy {
	ngUnsubscribe$ = new Subject();

	transactions: Transaction[];
	transactionsLoading$: Observable<boolean>;
	transactionsError$: Observable<any>;

	loadingMoreTrans = false;

	tableDataSource: MatTableDataSource<Transaction>;
	columndefs: any[] = ['type', 'amount', 'date', 'address'];

	constructor(private store: Store<TransactionState>) {}

	ngOnInit(): void {
		this.transactionsLoading$ = this.store.select(transactionSelectors.selectTransactionsLoading);
		this.transactionsError$ = this.store.select(transactionSelectors.selectTransactionsError);

		this.store.dispatch(transactionActions.loadLatestTransactions());
		this.store
			.select(transactionSelectors.selectTransactions)
			.pipe(takeUntil(this.ngUnsubscribe$))
			.subscribe((transactions) => {
				this.transactions = transactions;
				this.tableDataSource = new MatTableDataSource<Transaction>(this.transactions);
				this.loadingMoreTrans = false;
			});
	}

	getLastRowId() {
		return this.transactions[this.transactions.length - 1].row_id;
	}

	getBadgeClass(trans: Transaction) {
		// TODO
		return 'recieved';
	}

	onScroll(index: number) {
		if (this.transactions.length) {
			console.log(index);
			const lastElementInView = index + 10;
			const triggerElement = this.transactions.length - 5;
			console.log(lastElementInView, triggerElement);

			if (!this.loadingMoreTrans && lastElementInView >= triggerElement) {
				this.loadingMoreTrans = true;
				console.log('dispatch');
				this.store.dispatch(transactionActions.loadMoreTransactions({ lastRowId: this.getLastRowId() }));
			}
		}
	}

	ngOnDestroy() {
		this.ngUnsubscribe$.next();
		this.ngUnsubscribe$.complete();
	}
}

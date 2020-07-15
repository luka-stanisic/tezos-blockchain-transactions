import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTransaction from './transaction.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './transaction.effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(fromTransaction.transactionsFeatureKey, fromTransaction.reducer),
		EffectsModule.forFeature([TransactionEffects]),
	],
})
export class TransactionsStoreModule {}

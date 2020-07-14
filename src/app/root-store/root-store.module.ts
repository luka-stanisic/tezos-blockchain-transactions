import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TransactionsStoreModule } from './transactions-store/transactions-store.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), TransactionsStoreModule],
})
export class RootStoreModule {}

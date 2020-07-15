import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';

import { TransactionsComponent } from './transactions.component';

@NgModule({
	declarations: [TransactionsComponent],
	imports: [CommonModule, ScrollingModule, MatTableModule],
})
export class TransactionsModule {}

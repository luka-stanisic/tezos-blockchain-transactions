import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { RootStoreModule } from './root-store/root-store.module';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RootStoreModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		TransactionsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TransactionsModule } from './transactions/transactions.module';
import { environment } from 'src/environments/environment';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './root-store/root-store.module';
import { LoadingState } from './root-store/status-store/status.reducer';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
	beforeEach(async(() => {
		const initialState = {
			transactions: {
				custodians: {
					ids: [],
					entities: {},
					statusState: LoadingState.INIT,
				},
			},
		};
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, TransactionsModule, RootStoreModule, HttpClientModule],
			declarations: [AppComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Tezos Transactions'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('Tezos Transactions');
	});
});

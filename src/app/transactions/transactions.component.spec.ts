// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TransactionsComponent } from './transactions.component';

// describe('TransactionsComponent', () => {
// 	let component: TransactionsComponent;
// 	let fixture: ComponentFixture<TransactionsComponent>;

// 	beforeEach(async(() => {
// 		TestBed.configureTestingModule({
// 			declarations: [TransactionsComponent],
// 		}).compileComponents();
// 	}));

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(TransactionsComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it('should create', () => {
// 		expect(component).toBeTruthy();
// 	});
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingState } from '../root-store/status-store/status.reducer';

describe('TransactionsComponent', () => {
	let component: TransactionsComponent;
	let fixture: ComponentFixture<TransactionsComponent>;

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
			imports: [RouterTestingModule, HttpClientModule],
			declarations: [TransactionsComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TransactionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
	let service: TransactionsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(TransactionsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return list of transactions', () => {
		const expectedTransactions: any = [
			{
				row_id: 14849585,
				time: '1567721704000',
				sender: 'tz1bDXD6nNSrebqmAnnKKwnX1QdePSMCj4MX',
				receiver: 'tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo',
				volume: 8001,
				status: 'applied',
				reward: 0,
				volume_usd: 24850.201887,
				type: 'received',
			},
		];

		service.getLatestTransactions().subscribe((trans) => {
			expect(trans[0].row_id).toBe(expectedTransactions[0].row_id);
			expect(trans[0].time).toBe(expectedTransactions[0].time);
			expect(trans[0].sender).toBe(expectedTransactions[0].sender);
			expect(trans[0].receiver).toBe(expectedTransactions[0].receiver);
			expect(trans[0].volume).toBe(expectedTransactions[0].volume);
			expect(trans[0].status).toBe(expectedTransactions[0].status);
			expect(trans[0].reward).toBe(expectedTransactions[0].reward);
			expect(trans[0].volume_usd).toBe(expectedTransactions[0].volume_usd);
			expect(trans[0].type).toBe(expectedTransactions[0].type);
		}, fail);
	});
});

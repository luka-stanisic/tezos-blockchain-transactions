export class Transaction {
	row_id: number;
	type: string;
	time: string; // Date
	volume: string; // Amount XTZ
	sender: string; // Address

	static mapToModel(item: any[], columns: string[]): Transaction {
		const trans = new Transaction();
		for (let i = 0; i < columns.length; i++) {
			trans[columns[i]] = item[i];
		}
		return trans;
	}
}

export class Transaction {
	row_id: number;
	type: string;
	time: string; // Date
	volume: number; // Amount XTZ
	volume_usd: number; // Amount USD
	sender: string; // Sender address
	receiver: string; // Receiver address
	status: string; // Execution status: "applied", "failed", "backtracked", "skipped"
	reward: number;

	static mapToModel(item: any[], columns: string[]): Transaction {
		const trans = new Transaction();
		for (let i = 0; i < columns.length; i++) {
			trans[columns[i]] = item[i];
		}
		return trans;
	}
}

export const enum LoadingState {
	INIT = 'INIT',
	LOADING = 'LOADING',
	LOADED = 'LOADED',
}

export interface ErrorState {
	error: any;
}

export type StatusState = LoadingState | ErrorState;

// Helper function to extract error, if there is one.
export function getError(statusState: StatusState): any | null {
	if ((statusState as ErrorState).error) {
		return (statusState as ErrorState).error;
	}
	return null;
}

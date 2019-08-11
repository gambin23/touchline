export interface Api<T> {
	loading: boolean;
	error?: string;
	data?: T;
}

import { Manager } from './manager.model';

export interface User extends Manager {
	membershipLevel?: string;
}

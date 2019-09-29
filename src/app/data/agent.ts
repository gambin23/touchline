import { Agent } from '../models';

export const AGENT: Agent = {
	id: 1,
	avatar: 1,
	name: 'Felix',
	surname: 'Gatt',
	patience: 1
}


export const AGENTS: Agent[] = [
	AGENT,
	{ id: 2, avatar: 3, name: 'John', surname: 'Berger', patience: 2 },
	{ id: 3, avatar: 13, name: 'Mino', surname: 'Raiola', patience: 3 },
	{ id: 4, avatar: 12, name: 'Sasha', surname: 'Hill', patience: 4 },
	{ id: 5, avatar: 7, name: 'Chris', surname: 'Memphis', patience: 5 }
]

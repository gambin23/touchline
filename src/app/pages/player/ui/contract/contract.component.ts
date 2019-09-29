import { Component, Input } from '@angular/core';
import { sample } from 'lodash';

import { Api } from '../../../../common-sdk';
import { Player, Agent } from '../../../../models';

import { AgentDialogueType, AgentDialogue, AGENT_DIALOGUES } from './contract.model';

@Component({
	selector: 'player-contract',
	templateUrl: './contract.component.html',
	styleUrls: ['./contract.component.scss']
})
export class PlayerContractComponent {
	constructor() { }

	@Input() player: Player;
	@Input() agent: Api<Agent>;

	agentDialogueTypes = AgentDialogueType;
	agentDialogueShow = false;
	agentDialogue: AgentDialogue;

	startNegotations() {
		this.agentDialogueShow = true;
		this.agentDialogue = sample(AGENT_DIALOGUES.filter(d => d.patience === this.agent.data.patience && d.dialogueType === this.agentDialogueTypes.Start));
	}
}

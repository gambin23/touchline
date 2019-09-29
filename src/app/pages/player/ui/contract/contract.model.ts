export interface AgentDialogue {
	patience: number;
	dialogueType: AgentDialogueType;
	message: string;
}

export enum AgentDialogueType {
	Start,
	Negotiable,
	Accepted,
	Rejected
}

export const AGENT_DIALOGUES = [{
	patience: 1,
	dialogueType: AgentDialogueType.Start,
	message: `I do not have time to waste here, I hope you're coming to me with a good offer.`
}, {
	patience: 1,
	dialogueType: AgentDialogueType.Start,
	message: `My client is a very promising player, show me how much you want his services or we're going elsewhere.`
}, {
	patience: 2,
	dialogueType: AgentDialogueType.Start,
	message: `I'm waiting for you to make a good offer, all I' m saying is I want a fair fee for myself.`
}, {
	patience: 2,
	dialogueType: AgentDialogueType.Start,
	message: `Many clubs have shown interest in my client's services, show me how badly you want to sign him.`
}, {
	patience: 3,
	dialogueType: AgentDialogueType.Start,
	message: `I'd like these discussions to be brief. My client has some interest in joining your club.`
}, {
	patience: 4,
	dialogueType: AgentDialogueType.Start,
	message: `I'd like these discussions to be brief. My client has some interest in joining your club.`
}, {
	patience: 5,
	dialogueType: AgentDialogueType.Start,
	message: `My client is very interested in joining your club. Let's see where things go.`
}, {
	patience: 1,
	dialogueType: AgentDialogueType.Negotiable,
	message: `Am I joke to you? Who do you think I am? I sure hope you have something better to offer before I leave.`
}, {
	patience: 2,
	dialogueType: AgentDialogueType.Negotiable,
	message: `This offer is simply not good enough. Come back with something better or these talks aren't going anywhere.`
}, {
	patience: 3,
	dialogueType: AgentDialogueType.Negotiable,
	message: `That's a decent offer, however, I was expecting something better.`
}, {
	patience: 4,
	dialogueType: AgentDialogueType.Negotiable,
	message: `There's still some things we need to go through, but with the way things are going, we might soon reach an agreement.`
}, {
	patience: 5,
	dialogueType: AgentDialogueType.Negotiable,
	message: `My client is prepared to join your club, however, we still need to reach the right terms.`
}, {
	patience: 1,
	dialogueType: AgentDialogueType.Accepted,
	message: `I'm not happy with your offer, however, you managed to convince my client. We're ready to sign.`
}, {
	patience: 2,
	dialogueType: AgentDialogueType.Accepted,
	message: `I'm sure my client could have obtained a better offer if we handled things more patiently, but he is ready to sign.`
}, {
	patience: 3,
	dialogueType: AgentDialogueType.Accepted,
	message: `After reflecting on your offer, these conditions seem acceptable.`
}, {
	patience: 3,
	dialogueType: AgentDialogueType.Accepted,
	message: `We're both happy with how these talks were carried out. I'll get in touch to finalise this deal.`
}, {
	patience: 4,
	dialogueType: AgentDialogueType.Accepted,
	message: `My client is interested in joining your club with these terms. We have an agreement.`
}, {
	patience: 5,
	dialogueType: AgentDialogueType.Accepted,
	message: `My client is excited to join you club. Let's finalize these talks.`
}, {
	patience: 1,
	dialogueType: AgentDialogueType.Rejected,
	message: `I can see things aren't going anywhere here. Me and my client do not have any time to waste.`
}, {
	patience: 2,
	dialogueType: AgentDialogueType.Rejected,
	message: `My client is reluctant to leave his current club. If you want him, come back with a better offer.`
}, {
	patience: 3,
	dialogueType: AgentDialogueType.Rejected,
	message: `My client is still not convinced of moving on, maybe he'll change his mind in the future.`
}, {
	patience: 4,
	dialogueType: AgentDialogueType.Rejected,
	message: `My client seems to be scared of moving on to another club, maybe he'll change his mind in the future.`
}, {
	patience: 5,
	dialogueType: AgentDialogueType.Rejected,
	message: `That's a very good offer, but you need to understand where my client is coming from. Better luck next time.`
}];

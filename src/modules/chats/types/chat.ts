import { Message, ChatPracticants } from ".";

export interface Chat {
	id: number;
	messages: Message[];
	lastMessageId: number;
	practicants: ChatPracticants[]; // или participants — см. ниже
	createdAt: Date;
}

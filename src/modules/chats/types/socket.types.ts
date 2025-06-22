import { Result } from "../../../shared/types/result";

export type Chat = {
	id: number;
	lastMessageId: number;
	createdAt: Date;
};
export type ChatWithMessagesAndParticipants = {
	messages: {
		id: number;
		type: string;
		text: string | null;
		mediaUrl: string | null;
		senderId: number;
		chatId: number;
		chatAsLastMessageId: number;
		timestamp: Date;
	}[];
	participants: {
		id: number;
		chatId: number;
		userId: number;
	}[];
} & {
	id: number;
	lastMessageId: number;
	createdAt: Date;
};

export type MessagePayload = {
    type: string;
    text: string | null;
    mediaUrl: string | null;
    senderId: number;
    chatId: number;
    timestamp: Date;
}

export type CreateMessage = {
	id?: number;
	type: string;
	text?: string | null;
	mediaUrl?: string | null;
	senderId: number;
	chatId: number;
	chatAsLastMessageId: number;
	timestamp?: Date | string;
};

type IChatUpdatePayload = Chat;
type NewMessagePayload = CreateMessage;
type SendMessagePayload = MessagePayload;

export interface IJoinChatPayload {
	chatId: number;
}

export interface ILeaveChatPayload {
	chatId: number;
}
export type IJoinChatCallback = (
	response: Result<ChatWithMessagesAndParticipants>
) => void;

export interface IServerEvents {
	newMessage: (data: NewMessagePayload) => void;
	chatUpdate: (data: IChatUpdatePayload) => void;
}

export interface IClientEvents {
	joinChat: (data: IJoinChatPayload, callback: IJoinChatCallback) => void;
	leaveChat: (data: ILeaveChatPayload) => void;
    sendMessage: (
        data: SendMessagePayload
    ) => void
}

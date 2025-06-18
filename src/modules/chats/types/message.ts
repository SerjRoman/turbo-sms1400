export interface Message {
    id: number
    type: string
    text?: string
    mediaUrl?: string
    senderId: number
    chatId: number
    chatAsLastMessageId: number
}
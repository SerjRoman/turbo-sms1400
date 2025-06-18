import { useState } from "react";
import { Chat } from "../types";
import { useUserContext } from "../../auth/context/user.contex";
import { GET } from "../../../shared/api/get";




export function useChatById() {
    const  [chat, setChat] = useState<Chat | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { token } = useUserContext()

    async function fetchChatById(id: number) {
            try {
                if (!token) {
                    return { status: "error" };
                }
    
                setLoading(true);
                const response = await GET<Chat>({
                    endpoint: `/chats/${id}`,
                    token: token,
                });
                if (response.status === "error") {
                    setError(response.message || "failed to fetch");
                    return;
                }

                // const data: Chat = await response.json();
                setChat(response.data);
    
            } catch (err) {
                console.error("Error fetching chats:", err);
                setError("Failed to fetch chats");
            } finally {
                setLoading(false);
            }
        }


}
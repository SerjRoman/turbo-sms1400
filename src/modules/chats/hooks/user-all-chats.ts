import { useEffect, useState } from "react";
import { Chat } from "../types";
import { GET } from "../../../shared/api/get";
import { useUserContext } from "../../auth/context/user.contex";





export function useAllChats() {
    const [chats, setChats] = useState<Chat[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { token } = useUserContext()


    async function fetchAllChats() {
        try {
            if (!token) {
                return { status: "error" };
            }

            setLoading(true);
            const response = await GET<Chat[]>({
                endpoint: "/chats/all",
                token: token,
            });
            if (response.status === "error") {
                setError(response.message || "failed to fetch");
				return;
            }
            // const data: Chat[] = await response.json();
            setChats(response.data);

        } catch (err) {
            console.error("Error fetching chats:", err);
            setError("Failed to fetch chats");
        } finally {
            setLoading(false);
        }
    }


    // useEffect(() => {
    //     fetchAllChats()
    // })



    // const fetchContacts = async () => {
    //             setIsLoading(true);
    //             const res = await GET<IContact[]>({ endpoint: "/contacts" });
    //             if (res.status === "error") {
    //                 setError(res.message || "failed to fetch");
    //                 return;
    //             }
    //             setContacts(res.data);
    //             setIsLoading(false);
    //         };
    //         fetchContacts();


    return { chats, loading, error, function: fetchAllChats };
}
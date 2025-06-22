import { useState, useEffect } from "react";
import { GET } from "../../../shared/api/get";
import { IContact } from "../types/contact";
import { useUserContext } from "../../auth/context/user.contex";

export function useContacts() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [contacts, setContacts] = useState<IContact[]>([]);
    const {token} = useUserContext()
	useEffect(() => {
        if (!token) return
		const fetchContacts = async () => {
			setIsLoading(true);
			const res = await GET<IContact[]>({ endpoint: "api/contacts", token });
			if (res.status === "error") {
				setError(res.message || "failed to fetch");
				return;
			}
			setContacts(res.data);
			setIsLoading(false);
		};
		fetchContacts();
	}, []);
	return { isLoading, error, contacts };
}

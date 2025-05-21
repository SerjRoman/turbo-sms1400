import { useState, useEffect } from "react";
import { GET } from "../../../shared/api/get";
import { IContact } from "../types/contact";

export function useContacts() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [contacts, setContacts] = useState<IContact[]>([]);
	useEffect(() => {
		const fetchContacts = async () => {
			setIsLoading(true);
			const res = await GET<IContact[]>({ endpoint: "/contacts" });
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

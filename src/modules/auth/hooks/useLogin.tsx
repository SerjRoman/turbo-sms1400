import { useEffect, useState } from "react";
import { IUser } from "../types";

export function useLogin(email: string, password: string){
    const [user, setUser] = useState<IUser | undefined>()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function login() {
        try {
            setIsLoading(true);
            const response = await fetch(`https://localhost:8000/users/login`);
            if (!response.ok) throw new Error("Failed to fetch product");
            
            const result = await response.json();

            if (result.status === 'success') {
                setUser(result.data)
            } else{
                setError(result.message)
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        login(); // Вызываем внутри useEffect
    }, []);

    return { user, isLoading, error, refetch: login }
}
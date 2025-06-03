import { useEffect, useState } from "react";
import { ILogin, IUser } from "../types";
import { Result } from "../../../shared/types/result";
import { GET } from "../../../shared/api/get";
import { POST } from "../../../shared/api/post";
import { useUserContext } from "../context/user.contex";
import { IRegister } from "../types/reg";
import { useRouter } from "expo-router";

type AuthError = {
	message: string;
	code?: number;
	type?: "EXISTS" | "NOT_FOUND" | "UNAUTHORIZED" | "VALIDATION" | "SERVER";
};

export function useAuth() {
	const { user, setUser, setToken, token } = useUserContext();
	const router = useRouter();
	const [error, setError] = useState<AuthError | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	async function getMe(): Promise<Result<IUser>> {
		if (!token) {
			return { status: "error" };
		}

		setIsLoading(true);
		setError(null);

		try {
			const result = await GET<IUser>({
				endpoint: "api/users/me",
				token: token,
			});

			if (result.status === "error") {
				handleBackendError({
					message: result.message ?? "Unknown error",
					code: result.code,
				});
				return result;
			}

			setUser(result.data);
			return result;
		} catch (error) {
			const networkError: AuthError = {
				message: "Network error",
				type: "SERVER",
			};
			setError(networkError);
			return {
				status: "error",
				message: networkError.message,
				code: 500,
			};
		} finally {
			setIsLoading(false);
		}
	}
	async function login(credentials: ILogin): Promise<Result<string>> {
		setIsLoading(true);
		setError(null);

		try {
			const result = await POST<string>({
				endpoint: "api/users/login",
				body: credentials,
			});

			if (result.status === "error") {
				handleBackendError({
					message: result.message ?? "Unknown error",
					code: result.code,
				});
				return result;
			}
			setToken(result.data);
			return result;
		} catch (error) {
			const networkError: AuthError = {
				message: "Network error",
				type: "SERVER",
			};
			setError(networkError);
			return {
				status: "error",
				message: networkError.message,
				code: 500,
			};
		} finally {
			setIsLoading(false);
		}
	}

	async function register(credentials: IRegister): Promise<Result<string>> {
		setIsLoading(true);
		setError(null);

		try {
			const result = await POST<string>({
				endpoint: "api/users/register",
				body: credentials,
			});

			if (result.status === "error") {
				handleBackendError({
					message: result.message ?? "Unknown error",
					code: result.code,
				});
				return result;
			}
			setToken(result.data);
			return result;
		} catch (error) {
			const networkError: AuthError = {
				message: "Network error",
				type: "SERVER",
			};
			setError(networkError);
			return {
				status: "error",
				message: networkError.message,
				code: 500,
			};
		} finally {
			setIsLoading(false);
		}
	}

	function handleBackendError(result: { message: string; code?: number }) {
		let errorType: AuthError["type"];

		switch (result.code) {
			case 409:
				errorType = "EXISTS";
				break;
			case 404:
				errorType = "NOT_FOUND";
				break;
			case 401:
				errorType = "UNAUTHORIZED";
				break;
			case 422:
				errorType = "VALIDATION";
				break;
			default:
				errorType = "SERVER";
		}

		const authError: AuthError = {
			message: result.message,
			code: result.code,
			type: errorType,
		};

		setError(authError);
	}

	useEffect(() => {
		getMe();
	}, [token]);

	useEffect(() => {
		if (!user) return;
		router.replace("/chats");
	}, [user]);

	return {
		login,
		register,
		getMe,
	};
}

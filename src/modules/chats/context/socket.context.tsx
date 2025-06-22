import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { IClientEvents, IServerEvents } from "../types/socket.types";
import { useUserContext } from "../../auth/context/user.contex";
import { BASE_URL } from "../../../shared/constants";
import { Alert } from "react-native";

export interface ISocketContext {
	socket: Socket<IServerEvents, IClientEvents> | null;
}

interface ISocketContextProviderProps {
	children?: ReactNode;
}

const SocketContext = createContext<ISocketContext | null>(null);
export function useSocketContext() {
    const ctx = useContext(SocketContext)
    if (!ctx) throw new Error('UseSocketContext is not in Provider')
    return ctx
}
export function SocketContextProvider({
	children,
}: ISocketContextProviderProps) {
	const [socket, setSocket] = useState<Socket<
		IServerEvents,
		IClientEvents
	> | null>(null);

	const { token } = useUserContext();

	useEffect(() => {
		if (!token) return;
		const newSocket = io(`ws://${BASE_URL}`, { auth: { token } });

		newSocket.on("connect", () => {
			Alert.alert("Socket connected");
		});

		newSocket.on("disconnect", () => {
			Alert.alert("Socket disconnected");
		});

		setSocket(newSocket);
		return () => {
			socket?.disconnect();
		};
	}, [token]);

	return <SocketContext value={{ socket }}>{children}</SocketContext>;
}

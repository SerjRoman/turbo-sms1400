import { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContextProvider } from "../modules/auth/context/user.contex";
import { SocketContextProvider } from "../modules/chats/context/socket.context";

export function Providers({ children }: { children: ReactNode }) {
	return (
		<UserContextProvider>
			<SocketContextProvider>
				<SafeAreaProvider>{children}</SafeAreaProvider>
			</SocketContextProvider>
		</UserContextProvider>
	);
}

// footer - Tabs, Expo Router
// React Native Navigation - BottomTabNavigator

// Вариант 1 - <View><Header /></View>
// Вариант 2 - В Screen проп screenOptions, свойство header - передаем компонент Header
// Вариант 3 - В Screen пропы headerLeft, headerRight - передаем компоненты за куски вашего Header

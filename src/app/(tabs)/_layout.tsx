import { Tabs } from "expo-router";
import { Header } from "../../shared/ui/header";
import {
	ChatIcon,
	FooterProfile,
	FooterSettings,
	PeopleIcon,
} from "../../shared/ui/icons";

export default function TabsLayout() {
	return (
		<Tabs initialRouteName="chats" screenOptions={{}}>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: () => <PeopleIcon />,
				}}
			/>

			<Tabs.Screen
				name="chats"
				options={{
					tabBarIcon: () => <ChatIcon />,
					header: () => <Header title="Chats" />,
				}}
			/>

			<Tabs.Screen
				name="contacts"
				options={{
					tabBarIcon: () => <FooterProfile />,
				}}
			/>

			<Tabs.Screen
				name="settings"
				options={{
					tabBarIcon: () => <FooterSettings />,
				}}
			/>
		</Tabs>
	);
}

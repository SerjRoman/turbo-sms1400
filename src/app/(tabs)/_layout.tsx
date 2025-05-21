import { Tabs } from "expo-router";
import {
	ChatIcon,
	FooterProfile,
	FooterSettings,
	PeopleIcon,
} from "../../shared/ui/icons";
import { HeaderContacts } from "../../modules/contacts/ui/header/headerContacts";
import { HeaderProfile } from "../../modules/profile/ui";
import { HeaderChats } from "../../modules/chats/ui/header/headerChats";
import { HeaderSettings } from "../../modules/settings/ui";

export default function TabsLayout() {
	return (
		<Tabs initialRouteName="chats" screenOptions={{}}>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: () => <PeopleIcon />,
					header: () => <HeaderProfile />,
					headerStatusBarHeight: 10,
				}}
			/>

			<Tabs.Screen
				name="chats"
				options={{
					tabBarIcon: () => <ChatIcon />,
					header: () => <HeaderChats />,
					headerStatusBarHeight: 10,
				}}
			/>

			<Tabs.Screen
				name="contacts"
				options={{
					tabBarIcon: () => <FooterProfile />,
					header: () => <HeaderContacts />,
					headerStatusBarHeight: 10,
				}}
			/>

			<Tabs.Screen
				name="settings"
				options={{
					tabBarIcon: () => <FooterSettings />,
					header: () => <HeaderSettings />,
					headerStatusBarHeight: 10,
				}}
			/>
		</Tabs>
	);
}

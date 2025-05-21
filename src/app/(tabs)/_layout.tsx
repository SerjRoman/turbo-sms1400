import { Tabs } from "expo-router";
import {
	ChatIcon,
	FooterProfile,
	FooterSettings,
	PeopleIcon,
} from "../../shared/ui/icons";
import { HeaderContacts } from "../../modules/contacts/ui";
import { HeaderProfile } from "../../modules/profile/ui";
import { HeaderChats } from "../../modules/chats/ui";
import { HeaderSettings } from "../../modules/settings/ui";

import { COLORS } from "../../shared/ui/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.bisquePrimary }}
			edges={["top"]}
		>
			<Tabs
				initialRouteName="chats"
				screenOptions={{
					tabBarStyle: {
						backgroundColor: COLORS.bisqueSecondary,
					},
					tabBarLabelStyle: {
						color: COLORS.black,
						fontSize: 12,
					},
					// tabBarActiveBackgroundColor: "red",
				}}
			>
				<Tabs.Screen
					name="profile"
					options={{
						tabBarIcon: () => (
							<PeopleIcon
								width={24}
								height={24}
								fill={COLORS.black}
							/>
						),
						tabBarLabel: "Profile",
						header: () => <HeaderProfile />,
					}}
				/>

				<Tabs.Screen
					name="chats"
					options={{
						tabBarIcon: () => (
							<ChatIcon
								width={24}
								height={24}
								fill={COLORS.black}
							/>
						),
						tabBarLabel: "Chats",
						header: () => <HeaderChats />,
					}}
				/>

				<Tabs.Screen
					name="contacts"
					options={{
						tabBarIcon: () => (
							<FooterProfile
								width={24}
								height={24}
								fill={COLORS.black}
							/>
						),
						tabBarLabel: "Contacts",
						header: () => <HeaderContacts />,
					}}
				/>

				<Tabs.Screen
					name="settings"
					options={{
						tabBarIcon: () => (
							<FooterSettings
								width={24}
								height={24}
								fill={COLORS.black}
							/>
						),
						tabBarLabel: "settings",
						header: () => <HeaderSettings />,
					}}
				/>
			</Tabs>
		</SafeAreaView>
	);
}

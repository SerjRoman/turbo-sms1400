import { Stack } from "expo-router";
import { Header, HeaderBack } from "../../shared/ui/header";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderChatsCreate } from "../../modules/chats/ui";

export default function LayoutModal() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack>
				<Stack.Screen
					name="create-contact-step-one"
					options={{
						header: () => <HeaderBack title="Find user" />,
					}}
				/>

				<Stack.Screen
					name="create-contact-step-two"
					options={{
						header: () => <HeaderBack title="Create contact" />,
					}}
				/>

				<Stack.Screen
					name="create-chat"
					options={{
						header: () => <HeaderChatsCreate/>,
					}}
				/>
			</Stack>
		</SafeAreaView>
	);
}

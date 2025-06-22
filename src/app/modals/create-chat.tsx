import { View } from "react-native";
import { ContactsForChatList } from "../../modules/chats/ui/list/list";
// import { StepTwo } from "../../modules/contacts/ui";

export default function CreateChat() {
	return (
		<View style={{ flex: 1 }}>
			<ContactsForChatList></ContactsForChatList>
		</View>
	);
}
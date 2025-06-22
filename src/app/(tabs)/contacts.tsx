import { Text, View } from "react-native";
import { ContactsList } from "../../modules/contacts/ui";

export default function Contacts() {
	return (
		<View style={{ flex: 1 }}>
			<ContactsList></ContactsList>
		</View>
	);
}

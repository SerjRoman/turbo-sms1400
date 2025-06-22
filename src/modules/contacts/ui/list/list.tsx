import { View, Image, Text } from "react-native";
import { List } from "../../../../shared/ui/list";
import { styles } from "./list.styles";
import { IContact } from "../../types/contact";
import { useContacts } from "../../hooks/use-contacts";
import { BASE_IMAGE_URL } from "../../../../shared/constants";

function ContactItem(props: { item: IContact }) {
	const { item } = props;
	return (
		<View style={styles.item}>
			{/* http://localhost:8000/media/123141.png */}
			<View style={styles.imageBlock}>
                <Image style={styles.avatar} source={{ uri: `${BASE_IMAGE_URL}${item.contactUser.avatar}` }}></Image>
			</View>

            <View style={styles.textBlock}>
                <Text style={styles.localName}>{item.localName}</Text>
            </View>

		</View>
	);
}
export function ContactsList() {
	const { isLoading, error, contacts } = useContacts();

	return (
		<List
			data={contacts}
			renderItem={({ item }) => {
				return <ContactItem item={item} />;
			}}
		></List>
	);
}

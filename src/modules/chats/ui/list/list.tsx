import { View, Image, Text } from "react-native";
import { styles } from "./list.styles";
import { useEffect } from "react";
import { List } from "../../../../shared/ui/list";
import { BASE_IMAGE_URL } from "../../../../shared/constants";
import { IContact } from "../../../contacts/types/contact";
import { useSocketContext } from "../../context/socket.context";
import { useContacts } from "../../../contacts/hooks/use-contacts";
import { Button } from "../../../../shared/ui/button";

function ContactItem(props: { item: IContact }) {
	const { socket } = useSocketContext();
	const { item } = props;
	return (
		<View style={styles.item}>
			<View style={styles.imageBlock}>
				<Image
					style={styles.avatar}
					source={{
						uri: `${BASE_IMAGE_URL}${item.contactUser.avatar}`,
					}}
				></Image>
			</View>

			<View style={styles.textBlock}>
				{/* <Button
					onPress={() => {
						socket?.emit("joinChat", { chatId: 5 }, (data) => {
							console.log(
								"Status is: " + data.status
							);
						});
					}}
					label="Knopka"
				/> */}
				<Text style={styles.localName}>{item.localName}</Text>
			</View>
		</View>
	);
}

export function ContactsForChatList() {
	const { isLoading, error, contacts } = useContacts();
	// const { socket } = useSocketContext();
	// useEffect(() => {
	// 	if (!socket) return;
	// 	socket.on("chatUpdate", (data) => {});
    //     return () => {
    //         socket.off("chatUpdate")
    //     }
	// }, [socket]);
	return (
		<List
			data={contacts}
			renderItem={({ item }) => {
				return <ContactItem item={item} />;
			}}
		></List>
	);
}

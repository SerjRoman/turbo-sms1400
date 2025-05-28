import { View, Image, Text, Button } from "react-native";
import { Input } from "../../../../../shared/ui/input";
import { useEffect, useState } from "react";
import { GET } from "../../../../../shared/api/get";
import { IUser } from "../../../../auth/types";
import { SearchIcon } from "../../../../../shared/ui/icons";
import { styles } from "./step-one.styles";

export function StepOne() {
	const [image, setImage] = useState<string>("");
	const [value, setValue] = useState<string>("");
	const [foundUser, setFoundUser] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function getUser() {
			setIsLoading(true);
			setError(null);
			const response = await GET<IUser>({ endpoint: `/users/${value}` });
			if (response.status === "error") {
				switch (response.code) {
					case 404:
						setError("User not found");
						break;
					default:
						setError("Network error");
				}
				return;
			}
			setFoundUser(response.data);
		}
		getUser();
	}, [value]);
	return (
		<View style={styles.container}>
			<Input
				label="Username"
				placeholder="Username"
				defaultValue={value}
				onChangeText={(text) => {
					setValue(text);
				}}
				style={styles.searchUser}
				leftIcon={<SearchIcon width={24} height={24} />}
			/>
			{foundUser ? (
				<View style={styles.userContainer}>
					<Image
						source={
							{ uri: foundUser.avatar }
							// : require("../../../../shared/ui/images/boy.png") //antoshka
						}
						style={styles.userAvatar}
					/>
					<Text style={styles.userText}>{foundUser.username}</Text>
				</View>
			) : (
				<Text style={styles.userError}>{error}</Text>
			)}

			<Button disabled={foundUser ? false : true} title="Select"></Button>
		</View>
	);
}

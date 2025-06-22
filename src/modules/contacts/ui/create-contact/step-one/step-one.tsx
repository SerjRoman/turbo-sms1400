import { View, Image, Text } from "react-native";
import { Input } from "../../../../../shared/ui/input";
import { useEffect, useState } from "react";
import { GET } from "../../../../../shared/api/get";
import { IUser } from "../../../../auth/types";
import { SearchIcon } from "../../../../../shared/ui/icons";
import { styles } from "./step-one.styles";
import { BASE_IMAGE_URL } from "../../../../../shared/constants";
import { Button } from "../../../../../shared/ui/button";
import { useRouter } from "expo-router";

export function StepOne() {
	const [value, setValue] = useState<string>("");
	const [foundUser, setFoundUser] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const onPress = () => {
		router.push({
			pathname: "/modals/create-contact-step-two",
			params: {
				id: foundUser?.id,
				name: foundUser?.name,
				surname: foundUser?.surname,
				avatar: foundUser?.avatar,
			},
		});
	};

	useEffect(() => {
        if (!value) return
		async function getUser() {
			setIsLoading(true);
			setError(null);
			const response = await GET<IUser>({
				endpoint: `api/users/${value}`,
			});
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
				autoCapitalize={"none"}
				autoCorrect={false}
			/>
			{foundUser ? (
				<View style={styles.userContainer}>
					<Image
						source={{ uri: `${BASE_IMAGE_URL}${foundUser.avatar}` }}
						style={styles.userAvatar}
					/>
					<Text style={styles.userText}>{foundUser.username}</Text>
				</View>
			) : (
				<Text style={styles.userError}>{error}</Text>
			)}

			<Button
				disabled={foundUser ? false : true}
				label="Select"
				onPress={onPress}
			></Button>
		</View>
	);
}

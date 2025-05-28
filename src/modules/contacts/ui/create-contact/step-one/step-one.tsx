import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./step-one.styles";
import { Input } from "../../../../../shared/ui/input";
import { Button } from "../../../../../shared/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { GET } from "../../../../../shared/api/get";
import { IUser } from "../../../../auth/types";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { SerjImage } from "../../../../../shared/ui/images/serjick";
import { SearchIcon } from "../../../../../shared/ui/icons";

export function StepOne() {
	const [image, setImage] = useState<string | null>(null);
	const [value, setValue] = useState<string>("");
	const [foundUser, setFoundUser] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		async function getUser() {
			if (!value) {
				setIsLoading(false);
				setFoundUser(null);
				setError(null);
				StepOne()
				return;
			}

			setIsLoading(true);
			setError(null);

			const response = await GET<IUser>({ endpoint: `/users/${value}` });
			setIsLoading(false);

			if (response.status === "error") {
				switch (response.code) {
					case 404:
						setError("User not found!");
						break;
					default:
						setError("Network error!");
				}
				setFoundUser(null);
				setImage(null);
				return;
			}

			setFoundUser(response.data);
			setImage(response.data.avatar || null);
		}

		getUser();
	}, [value]);

	async function pickImage() {
		const result = await requestMediaLibraryPermissionsAsync();
		if (result.status === "granted") {
			const images = await launchImageLibraryAsync({
				mediaTypes: "images",
				allowsEditing: true,
				allowsMultipleSelection: false,
				selectionLimit: 1,
				base64: false,
			});

			if (!images.canceled && images.assets) {
				setImage(images.assets[0].uri);
			}
		}
	}

	function handleSelect() {
		if (foundUser) {
			router.push({
				pathname: "/contacts/create-contact/step-two",
				params: {
					id: foundUser.id,
					name: foundUser.name,
					surname: foundUser.surname || "",
					avatar: image || foundUser.avatar || "",
					contactUserId: foundUser.id,
				},
			});
		}
	};

	return (
		<View style={styles.container}>
			<Input
				label="Username"
				placeholder="Username"
				value={value}
				onChangeText={(text) => setValue(text)}
				leftIcon={<SearchIcon style={{width: 24, height: 24}}/>}
				style={{height: 40, width: "100%"}}
			/>
			{isLoading ? (
				<Text>Loading..</Text>
			) : foundUser ? (
				<View style={styles.userContainer}>
					<TouchableOpacity onPress={pickImage}>
						<TouchableOpacity onPress={pickImage}>
							{image ? <Image
								source={{
									uri: image,
								}}
								style={styles.avatar}
							/> : <SerjImage style={styles.avatar} />}
						</TouchableOpacity>
					</TouchableOpacity>
					<Text style={styles.userText}>{foundUser.name}</Text>
					{foundUser.surname && (
						<Text style={styles.userText}>{foundUser.surname}</Text>
					)}
				</View>
			) : (
				error && <Text style={styles.errorText}>{error}</Text>
			)}
			<Button
				onPress={handleSelect}
				disabled={!foundUser}
				label="Select"
			/>
		</View>
	);
}
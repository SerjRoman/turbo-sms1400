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
	const router = useRouter()

	useEffect(() => {

		// console.log(123123123123123)
		async function getUser() {
			setIsLoading(true);
			setFoundUser(null)
			setError(null);
			const response = await GET<IUser>({ endpoint: `users/${value}` });
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
			console.log(foundUser)
		}
		getUser();
	}, [value]);

	function selectUser(){
		if (!foundUser) return
		router.push({
			pathname:'modals/create-contact-step-two',
			params: {id: foundUser.id}
		})
	}

	return (
		<View style={styles.container}>
			<Input
				label="Username"
				placeholder="Username"
				defaultValue={value}
				leftIcon={<SearchIcon fill={'#000000'} />}
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
							foundUser.avatar ?
							{ uri: foundUser.avatar }:
							require("../../../../../shared/ui/images/boy") //antoshka
						}
						style={styles.userAvatar}
					/>
					<Text style={styles.userText}>{foundUser.username}</Text>
				</View>
			) : (
				<Text style={styles.userError}>{error}</Text>
			)}

			<TouchableOpacity onPress={()=>selectUser()} disabled={foundUser ? false : true} style={{backgroundColor: COLORS.grey}} >Select</TouchableOpacity>
		</View>
	);
}

import { TouchableOpacity, View, Image, Text, Button } from "react-native";
import { Input } from "../../../../../shared/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GET } from "../../../../../shared/api/get";
import { IUser } from "../../../../auth/types";

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
		// setTimeout(()=> {
		//     const response = await GET()
		// }, 500)
	}, [value]);
	return (
		<View>
			<Input
				label="Username"
				placeholder="Username"
				defaultValue={value}
				onChangeText={(text) => {
					setValue(text);
				}}
			/>
			{foundUser ? (
				<View>
					<Image
						source={
							{ uri: foundUser.avatar }
							// : require("../../../../shared/ui/images/boy.png") //antoshka
						}
						style={{}}
					/>
					<Text>Username</Text>
				</View>
			) : (
				<Text>{error}</Text>
			)}

			<Button disabled={foundUser ? false : true} title="Select"></Button>
		</View>
	);
}

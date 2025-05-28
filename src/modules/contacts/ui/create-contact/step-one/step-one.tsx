import { TouchableOpacity, View, Image, Text, Button } from "react-native";
import { Input } from "../../../../../shared/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GET } from "../../../../../shared/api/get";
import { IUser } from "../../../../auth/types";
import { SearchIcon } from "../../../../../shared/ui/icons";
import { COLORS } from "../../../../../shared/ui/colors";
import { useRouteInfo, useRouter } from "expo-router/build/hooks";

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

		getUser()
		// setTimeout(()=> {
		//     const response = await GET()
		// }, 500)
	}, [value]);

	function selectUser(){
		if (!foundUser) return
		router.push({
			pathname:'modals/create-contact-step-two',
			params: {id: foundUser.id}
		})
	}

	return (
		<View>
			<Input
				label="Username"
				placeholder="Username"
				defaultValue={value}
				leftIcon={<SearchIcon fill={'#000000'} />}
				onChangeText={(text) => {
					setValue(text);
				}}
			/>
			{foundUser ? (
				<View>
					<Image
						source={
							foundUser.avatar ?
							{ uri: foundUser.avatar }:
							require("../../../../../shared/ui/images/boy") //antoshka
						}
						style={{width: 100, height:100}}
					/>
					<Text>Username</Text>
				</View>
			) : (
				<Text>{error}</Text>
			)}

			<TouchableOpacity onPress={()=>selectUser()} disabled={foundUser ? false : true} style={{backgroundColor: COLORS.grey}} >Select</TouchableOpacity>
		</View>
	);
}

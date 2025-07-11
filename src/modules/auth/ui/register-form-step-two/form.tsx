import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { UserIcon } from "../../../../shared/ui/icons";
import { Controller, useForm } from "react-hook-form";
import { IRegisterStepTwo } from "../../types/reg";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import { COLORS } from "../../../../shared/ui/colors";
import {
	launchImageLibraryAsync,
	requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SearchIcon } from "../../../../shared/ui/icons";
import { useAuth } from "../../hooks/useAuth";
import { pickImage } from "../../../../shared/tools/pick-image";

const defaultImage = require("../../../../../assets/boy.png");

// token, user, setToken, setUser - context
// useAuth() {

//     return {login, register}
// }

export function RegisterFormStepTwo() {
	const { control, handleSubmit } = useForm<IRegisterStepTwo>();
	const { register } = useAuth();
	// useLocalSearchParams - хук який витягує всі параметри, як динамічні так і query параметри
	const params = useLocalSearchParams<{
		username: string;
		email: string;
		password: string;
	}>();

	async function onSubmit(data: IRegisterStepTwo) {
		const result = await register({
			...params,
			...data,
		});
        console.log(result)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<UserIcon width={35} height={36} />
				<Text style={styles.headerText}>Personal Info</Text>
			</View>

			<Controller
				control={control}
				name="name"
				rules={{
					required: {
						value: true,
						message: "Name is required",
					},
					minLength: {
						value: 3,
						message: "Name must be at least 3 characters long",
					},
				}}
				render={({ field, fieldState }) => {
					return (
						<Input
							value={field.value}
							onChangeText={field.onChange}
							onChange={field.onChange}
							placeholder="Name"
							error={fieldState.error?.message}
							autoCapitalize={"none"}
							autoCorrect={false}
						/>
					);
				}}
			/>

			<Controller
				control={control}
				name="surname"
				rules={{
					required: {
						value: true,
						message: "Surname is required",
					},
					minLength: {
						value: 3,
						message: "Surname must be at least 3 characters long",
					},
				}}
				render={({ field, fieldState }) => {
					return (
						<Input
							value={field.value}
							onChange={field.onChange}
							onChangeText={field.onChange}
							placeholder="Surname"
							error={fieldState.error?.message}
							autoCapitalize={"none"}
							autoCorrect={false}
						/>
					);
				}}
			/>
			<Controller
				control={control}
				name="avatar"
				render={({ field }) => {
					return (
						<TouchableOpacity
							onPress={async () => {
								const images = await pickImage({
									allowsEditing: true,
									allowsMultipleSelection: false,
									selectionLimit: 1,
									base64: true,
								});
								if (!images) return;

								const image = images.at(0);
								if (!image) return;

								let base64 = image.base64;
								if (!base64) return;
                                
                                base64 = 'data:image/jpeg;base64,' + base64
								field.onChange(base64);
							}}
						>
							<View style={styles.imageContainer}>
								<View style={styles.imageWrapper}>
									<Image
										source={{ uri: field.value }}
										style={{
											width: 75,
											height: 75,
											borderRadius: 37.5,
										}}
										resizeMode="cover"
									/>
									<SearchIcon
										width={32}
										height={34}
										style={styles.searchIcon}
									/>
								</View>
								<Text style={styles.uploadText}>
									Upload photo
								</Text>
							</View>
						</TouchableOpacity>
					);
				}}
			/>

			<Button onPress={handleSubmit(onSubmit)} label="Register" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	headerText: {
		fontSize: 36,
		fontWeight: "400",
	},
	imageContainer: {
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
	},
	imageWrapper: {
		position: "relative",
		width: 75,
		height: 75,
	},
	searchIcon: {
		position: "absolute",
		top: 20,
		right: 20,
	},
	uploadText: {
		fontSize: 14,
		color: COLORS.black,
		fontWeight: "500",
	},
});

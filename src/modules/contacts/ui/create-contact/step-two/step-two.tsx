import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./step-two.styles";
import { IStepTwo, IStepTwoS } from "./step-two.type";
import { Input } from "../../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../../shared/ui/button";
import { POST } from "../../../../../shared/api/post";
import { useLocalSearchParams } from "expo-router";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { useState } from "react";
import { SerjImage } from "../../../../../shared/ui/images/serjick";
import { useUserContext } from "../../../../auth/context/user.contex";

export function StepTwo() {
	const [image, setImage] = useState<string | null>(null);
	const { token } = useUserContext()

	const foundUser = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
		avatar?: string;
	}>();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: foundUser.name,
			surname: foundUser.surname
		}
	});

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

			if (images.assets) {
				setImage(images.assets[0].uri);
			}
		}
	}

	async function onSubmit(data: IStepTwoS) {
		try {
			const payload: IStepTwo = {
				localName: data.name + " " + data.surname,
				avatar: image || foundUser.avatar || "",
				ownerId: token || "",
				contactUserId: parseInt(foundUser.id),
				addedAt: new Date()
			};

			const response = await POST<IStepTwo>({
				endpoint: `/contacts/create`,
				body: payload,
			});

			if (response.status === "error") {
				throw Error("Failed to save user data");
			}
		} catch (error) {
			console.error("Error saving user data:", error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<TouchableOpacity onPress={pickImage}>
					{image ? <Image
						source={{
							uri: image
						}}
						style={styles.avatar}
					/> : <SerjImage style={styles.avatar} />}
				</TouchableOpacity>
			</View>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="name"
					rules={{
						required: {
							value: true,
							message: "Name is required",
						},
						maxLength: {
							value: 32,
							message: "Name must be at most 32 characters long",
						},
					}}
					render={({ field, fieldState }) => (
						<Input
							label="Contact name"
							placeholder="Name"
							value={field.value}
							onChange={field.onChange}
							error={fieldState.error?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="surname"
					rules={{
						maxLength: {
							value: 32,
							message: "Surname must be at most 32 characters long",
						},
					}}
					render={({ field, fieldState }) => (
						<Input
							label="Contact surname"
							placeholder="Surname"
							value={field.value}
							onChange={field.onChange}
							error={fieldState.error?.message}
						/>
					)}
				/>
			</View>
			<Button onPress={handleSubmit(onSubmit)} label="Add contact" />
		</View>
	);
}
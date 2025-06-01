import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./step-two.styles";
import { IStepTwoForm } from "./step-two.type";
import { Input } from "../../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../../shared/ui/button";
import { POST } from "../../../../../shared/api/post";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useUserContext } from "../../../../auth/context/user.contex";
import { pickImage } from "../../../../../shared/tools/pick-image";
import { SearchIcon } from "../../../../../shared/ui/icons";

export function StepTwo() {
	const foundUser = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
		avatar: string;
	}>();
	const { token } = useUserContext();

	const { control, handleSubmit } = useForm<IStepTwoForm>({
		defaultValues: {
			name: foundUser.name,
			surname: foundUser.surname,
			avatar: foundUser.avatar,
		},
	});

	function onSubmit(data: IStepTwoForm) {
		if (!token) return;

		POST({
			endpoint: "api/contacts/create",
			body: {
				contactId: +foundUser.id,
				avatar: data.avatar,
				localName: data.name + " " + data.surname,
			},
			token: token,
		});
	}

	return (
		<View style={styles.container}>
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
					render={({ field, fieldState }) => {
						return (
							<Input
								label="Name"
								placeholder="Sergey"
								value={field.value}
								onChange={field.onChange}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name="surname"
					rules={{
						maxLength: {
							value: 32,
							message:
								"Surname must be at most 32 characters long",
						},
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								label="Surname"
								placeholder=""
								value={field.value}
								onChange={field.onChange}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>
			</View>
			<View style={styles.avatarBlock}>
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

									const base64 = image.base64;
									if (!base64) return;

									field.onChange(base64);
								}}
							>
								<Image
									style={styles.avatar}
									source={{ uri: field.value }}
								/>
								<SearchIcon style={styles.searchIcon}/>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
			<Button onPress={handleSubmit(onSubmit)} label="Save" />
		</View>
	);
}

import { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
	launchImageLibraryAsync,
	requestMediaLibraryPermissionsAsync,
	MediaTypeOptions,
} from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";

import { styles } from "./step-two.styles";
import { IStepTwo } from "./step-two.type";
import { Input } from "../../../../../shared/ui/input";
import { Button } from "../../../../../shared/ui/button";
import { POST } from "../../../../../shared/api/post";
import { SearchIcon } from "../../../../../shared/ui/icons";

// ⚠️ Убедись, что путь верный и файл реально существует
const defaultImage = require("../../../../../shared/assets/default.png");

export function StepTwo() {
	const [image, setImage] = useState<string | null>(null);

	const foundUser = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
	}>();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: foundUser.name,
			surname: foundUser.surname,
		},
	});

	async function onSearch() {
		const result = await requestMediaLibraryPermissionsAsync();
		if (result.status === "granted") {
			const images = await launchImageLibraryAsync({
				mediaTypes: MediaTypeOptions.Images,
				allowsEditing: true,
				allowsMultipleSelection: false,
				selectionLimit: 1,
				base64: false,
			});

			if (!images.canceled && images.assets && images.assets.length > 0) {
				setImage(images.assets[0].uri);
			}
		}
	}

	function onSubmit(data: IStepTwo) {
		console.log("Submitted data:", data);
		// TODO: отправка данных на сервер
		// POST<IStepTwo>("/api/step-two", { ...data, image });
	}

	return (
		<View style={styles.container}>
			<View style={styles.inputsContainer}>
				<Controller
					control={control}
					name="name"
					rules={{
						required: "Name is required",
						maxLength: {
							value: 32,
							message: "Name must be at most 32 characters long",
						},
					}}
					render={({ field, fieldState }) => (
						<Input
							label="Name"
							placeholder="Sergey"
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
							label="Surname*"
							placeholder=""
							value={field.value}
							onChange={field.onChange}
							error={fieldState.error?.message}
						/>
					)}
				/>

				<TouchableOpacity onPress={onSearch}>
					<View style={styles.imageContainer}>
						<View style={styles.imageWrapper}>
							<Image
								source={image ? { uri: image } : defaultImage}
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
						<Text style={styles.uploadText}>Upload photo</Text>
					</View>
				</TouchableOpacity>
			</View>

			<Button onPress={handleSubmit(onSubmit)} label="Save" />
		</View>
	);
}

import { View } from "react-native";
import { styles } from "./step-two.styles";
import { IStepTwo } from "./step-two.type";
import { Input } from "../../../../../shared/ui/input";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../../../shared/ui/button";
import { POST } from "../../../../../shared/api/post";
import { useLocalSearchParams } from "expo-router";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { useState } from "react";

export function StepTwo() {
    const [image, setImage] = useState<string | null>(null);
    const foundUser = useLocalSearchParams<{
		id: string;
		name: string;
		surname: string;
	}>();

	const { control, handleSubmit } = useForm({defaultValues: {
        name: foundUser.name,
        surname: foundUser.surname
    }});
    // ЕЩКЕРЕЕЕЕ
    
	// function onSubmit() {
	//     POST<IStepTwo>()
	// }

    // какащкэ, пасхалко


    async function Image() {
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
								label="Surname*"
								placeholder=""
								value={field.value}
								onChange={field.onChange}
								error={fieldState.error?.message}
							/>
						);
					}}
				/>
			</View>
			<View>

            </View>
			<Button onPress={handleSubmit()} label="Save" />
		</View>
	);
}

import { SafeAreaView } from "react-native-safe-area-context";
import {
	FooterBlock,
	RegisterFormStepTwo,
	WelcomeBlock,
} from "../../../modules/auth/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterStepTwo() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"handled"}
				enableOnAndroid={true}
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: "center",
					gap: 20,
					paddingTop: 30,
				}}
				style={{ flex: 1 }}
			>
				<WelcomeBlock />
				<RegisterFormStepTwo />
				<FooterBlock
					text={"Already have an account?"}
					linkHref="/login"
					linkText="Login!"
				/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}

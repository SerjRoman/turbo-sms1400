import { SafeAreaView } from "react-native-safe-area-context";
import {
	WelcomeBlock,
	RegisterFormStepOne,
	FooterBlock,
} from "../../../modules/auth/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterStepOne() {
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
				}}
				style={{ flex: 1 }}
			>
				<WelcomeBlock />
				<RegisterFormStepOne />
				<FooterBlock
					text={"Already have an account?"}
					linkHref="/login"
					linkText="Login!"
				/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}

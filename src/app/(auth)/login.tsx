import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FooterBlock, LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAwareScrollView
				keyboardShouldPersistTaps={"handled"}
				enableOnAndroid={true}
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			>
				<StatusBar style="auto" />
				<WelcomeBlock />
				<LoginForm />
				<FooterBlock
					text={"Don’t have an account?"}
					linkHref={"/register/step-one"}
					linkText={"Register now"}
				/>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}

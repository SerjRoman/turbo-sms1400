import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock, FooterBlock } from "../../modules/auth/ui";
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

export default function Login() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto" />
            <WelcomeBlock/>
            <LoginForm/>
            <View style={styles.textDontHaveAccount}>
                <FooterBlock text={"Don’t have an account?"} linkHref={"/register-form-step-one"} linkText={"Register now"}/>
            </View>
            
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    textDontHaveAccount: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    }
})
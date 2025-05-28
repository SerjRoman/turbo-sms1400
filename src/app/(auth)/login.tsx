import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FooterBlock, LoginForm, WelcomeBlock } from "../../modules/auth/ui";

export default function Login() {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-around',}}>
            <StatusBar style="auto" />
            <WelcomeBlock/>
            <LoginForm/>
            <FooterBlock 
                text={"Don’t have an account?"} 
                linkHref={"/register/step-one"}
                linkText={"Register now"}/>
            <Text>Don’t have an account? <Link style={{color: '#733349', flex: 0.5,}} href={'/register'}>Register now</Link></Text>
        </SafeAreaView>
    )
}
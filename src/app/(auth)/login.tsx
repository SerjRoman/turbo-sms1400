import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import { Link } from 'expo-router';
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { COLORS } from '../../shared/ui/colors'

export default function Login() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style="auto" />
            <WelcomeBlock/>
            <LoginForm/>
            <View style={styles.textDontHaveAccount}>
                <Text>Don’t have an account? <Link href={'/register-form-step-one'} style={styles.linkDontHaveAccount}>Register now</Link></Text>
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    textDontHaveAccount: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    linkDontHaveAccount: {
        color: COLORS.pinkPrimary,
        fontWeight: 'bold'
    }
})
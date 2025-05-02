import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterFormStepOne, RegisterFormStepTwo, WelcomeBlock, FooterBlock } from "../../modules/auth/ui";
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

export default function RegisterStepTwo(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <WelcomeBlock></WelcomeBlock>
            <RegisterFormStepTwo></RegisterFormStepTwo>
            <View style={styles.textAlreadyHaveAccount}>
                <FooterBlock text={"Already have an account?"} linkHref='/login' linkText='Login now' />
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    textAlreadyHaveAccount: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    }
})
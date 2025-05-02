import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterFormStepOne, RegisterFormStepTwo, WelcomeBlock } from "../../modules/auth/ui";
import { StyleSheet } from 'react-native'
import { COLORS } from '../../shared/ui/colors'

export default function RegisterStepOne(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <WelcomeBlock></WelcomeBlock>
            <RegisterFormStepOne></RegisterFormStepOne>
            <View style={styles.textAlreadyHaveAccount}>
                <Text>Already have account? <Link href={'/login'} style={styles.linkAlreadyHaveAccount}>Login now</Link></Text>
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    textAlreadyHaveAccount: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    linkAlreadyHaveAccount: {
        color: COLORS.pinkPrimary,
        fontWeight: 'bold'
    }
})
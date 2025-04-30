import { Link } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterFormStepOne, RegisterFormStepTwo, WelcomeBlock } from "../../modules/auth/ui";

export default function RegisterStepOne(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <WelcomeBlock></WelcomeBlock>
            <RegisterFormStepOne></RegisterFormStepOne>
            <Text>Hello register <Link href={'/login'}>Back to Login</Link></Text>
        </SafeAreaView>
    )
}
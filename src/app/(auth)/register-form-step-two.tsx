import { SafeAreaView } from 'react-native-safe-area-context'
import { RegisterFormStepOne, RegisterFormStepTwo, WelcomeBlock } from "../../modules/auth/ui";

export default function RegisterStepTwo(){
    return (
        <SafeAreaView style={{flex: 1}}>
            <WelcomeBlock></WelcomeBlock>
            <RegisterFormStepTwo></RegisterFormStepTwo>
        </SafeAreaView>
    )
}
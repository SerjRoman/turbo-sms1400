import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FooterBlock, RegisterFormStepTwo, WelcomeBlock } from '../../../modules/auth/ui';

export default function RegisterStepTwo() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                gap: 20,
                paddingTop:30,
            }}>
                <WelcomeBlock />
                <RegisterFormStepTwo />
                <FooterBlock 
                    text={"Already have an account?"} 
                    linkHref='/login' 
                    linkText='Login!' />
            </ScrollView>
        </SafeAreaView>
    );
}

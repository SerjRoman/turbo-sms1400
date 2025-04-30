import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeBlock, RegisterFormStepOne, FooterBlock } from '../../../modules/auth/ui';

export default function RegisterStepOne() {
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1, 
                justifyContent: 'center', 
                gap: 20,
            }}>
                <WelcomeBlock />
                <RegisterFormStepOne/>
                <FooterBlock 
                    text={"Already have an account?"} 
                    linkHref='/login' 
                    linkText='Login!'/>
            </ScrollView>
        </SafeAreaView>
    );
}
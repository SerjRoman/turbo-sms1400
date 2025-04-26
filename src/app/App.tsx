import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, RegisterForm, WelcomeBlock } from '../modules/auth/ui';


export default function App() {
    return (
        <Providers>
            <SafeAreaView style={{flex: 1}}> 
                <StatusBar style="auto" />
                <WelcomeBlock/>
                <RegisterForm/>
            </SafeAreaView>
        </Providers>
);
}

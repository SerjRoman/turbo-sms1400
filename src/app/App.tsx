import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, WelcomeBlock } from '../modules/auth/ui';
import { RegPage } from '../modules/auth/ui/reg-form';


export default function App() {
    return (
        <Providers>
            <SafeAreaView> 
                <StatusBar style="auto" />
                {/* <WelcomeBlock/>
                <LoginForm/> */}
                <RegPage/>
            </SafeAreaView>
        </Providers>
);
}

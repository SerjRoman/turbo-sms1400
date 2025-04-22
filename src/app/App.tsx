import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../modules/auth/ui/login-form/form';

export default function App() {
    return (
        <Providers>
            <SafeAreaView>
                <StatusBar style="auto" />
                <LoginForm/>
            </SafeAreaView>
        </Providers>
);
}

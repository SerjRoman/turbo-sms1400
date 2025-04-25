import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, WelcomeBlock } from '../modules/auth/ui';
import { styles } from "./App.styles";

export default function App() {
    return (
        <Providers>
            <SafeAreaView style={styles.container}> 
                <StatusBar style="auto" />
                <WelcomeBlock/>
                <LoginForm/>
            </SafeAreaView>
        </Providers>
);
}

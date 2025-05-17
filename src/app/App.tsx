import { StatusBar } from 'expo-status-bar';
import {Providers} from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContextProvider } from '../modules/auth/context/user.contex';


export default function App() {
    return (
        <Providers>
            <UserContextProvider>
                <SafeAreaView> 
                    <StatusBar style="auto" />
                </SafeAreaView>
            </UserContextProvider>
        </Providers>
);
}

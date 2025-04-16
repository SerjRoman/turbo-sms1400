import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../shared/ui/button';

export default function App() {
    return (
        <Providers>
            <SafeAreaView>
                <StatusBar style="auto" />
                <Button label="Submit" disabled={false}/>
            </SafeAreaView>
        </Providers>
);
}

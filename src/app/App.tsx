import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, WelcomeBlock } from '../modules/auth/ui';
import React from 'react';
import { RegisterForm } from '../modules/auth/ui/register-form';


export default function App() {
    return (
        <Providers>
            <SafeAreaView> 
                <StatusBar style="auto" />
                <WelcomeBlock/>
                <RegisterForm/>
            </SafeAreaView>
        </Providers>
);
}

import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../shared/ui/button';
import React from 'react';
import { Input } from '../shared/ui/input';
import { Image } from 'react-native';

const iconLeft = Image.resolveAssetSource(require('../../assets/icon-user.png')).uri
const iconRight = Image.resolveAssetSource(require('../../assets/icon-eye.png')).uri

export default function App() {
    return (
        <Providers>
            <SafeAreaView>
                <StatusBar style="auto" />
                <Input label="Email" iconLeft={iconLeft} iconRight={iconRight} placeholder='Email...'></Input>
                <Button label="Submit" disabled={false}/>
            </SafeAreaView>
        </Providers>
);
}

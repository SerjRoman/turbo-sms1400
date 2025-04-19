import { StatusBar } from 'expo-status-bar';
import { Providers } from './providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../shared/ui/button';
import { Input } from '../shared/ui/input';

import { Image } from 'react-native';

const iconLUri = Image.resolveAssetSource(require('../../assets/icon-frame.png')).uri;
const iconRUri = Image.resolveAssetSource(require('../../assets/icon-eye.png')).uri;
const iconEUri = Image.resolveAssetSource(require('../../assets/error.png')).uri;

export default function App() {
    return (
        <Providers>
            <SafeAreaView>
                <StatusBar style="auto" />
                <Button label="Submit" disabled={false}/>
                <Input label='Email' placeholder='SuperCoolEmail@gmail.com' error='This field is required' leftIcon={iconLUri} rightIcon={iconRUri} errorIcon={iconEUri}></Input>
            </SafeAreaView>
        </Providers>
);
}

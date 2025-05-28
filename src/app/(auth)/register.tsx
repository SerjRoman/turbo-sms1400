import { Link } from 'expo-router'
import {Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WelcomeBlock } from '../../modules/auth/ui'
import { RegisterForm } from '../../modules/auth/ui/register-form/form'
// import { COLORS } from '../../shared/ui/colors'

export default function Register(){
    return <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-around',}}>
        <WelcomeBlock />
        <RegisterForm />
        <Text>Hello register <Link style={{color: '#733349', flex: 0.5,}} href={'/login'}>Back to Login</Link></Text>
    </SafeAreaView>
}
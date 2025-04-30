import { Link } from 'expo-router';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WelcomeBlock } from '../../modules/auth/ui';
import { COLORS } from '../../shared/ui/colors';
import { RegAbout } from '../../modules/auth/ui/reg-form/reg-about';

export default function RegisterAbout() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <WelcomeBlock />
                <RegAbout />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <Link href={'/login'} style={styles.footerLink}>Login in</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        gap: 20,
        paddingTop:30,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    footerText: {
        fontSize: 14,
        color: COLORS.black, 
        fontWeight: '400',
    },
    footerLink: {
        fontSize: 14,
        color: COLORS.brownPrimary, 
        fontWeight: '600',
    },
});
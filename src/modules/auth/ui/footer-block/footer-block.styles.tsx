import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../shared/ui/colors';

export const styles = StyleSheet.create({
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
        textAlign: "center"
    },
    footerLink: {
        fontSize: 14,
        color: COLORS.brownPrimary, 
        fontWeight: '600',
    },
});
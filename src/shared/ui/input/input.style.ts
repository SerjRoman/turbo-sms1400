import { StyleSheet } from "react-native"
import { COLORS } from '../colors'

export const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        color: COLORS.black,
        marginBottom: 8,
        paddingLeft:5,
        fontWeight: '500',
    },
    inputWrapper: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftIcon: {
        position: 'absolute',
        left: 16,
        zIndex: 2,
    },
    rightIcon: {
        position: 'absolute',
        right: 35,
        zIndex: 2,
    },
    input: {
        width: 349,
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.bisquePrimary,
        borderRadius: 16,
        fontSize: 16,
        backgroundColor: COLORS.bisquePrimary,
    },
    inputWithLeftIcon: {
        paddingLeft: 60, 
    },
    inputWithRightIcon: {
        paddingRight: 60, 
    },
    errorText: {
        color: COLORS.red,
        fontSize: 14,
        flexShrink: 1,
        paddingLeft: 24,
        fontWeight: '500',
    },
    errorIcon: {
        position: 'absolute',
        left: 10,
        width: 15,
        height: 15,
        zIndex: 2,
    },
});

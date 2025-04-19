import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const styles = StyleSheet.create({
    inputField: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 60,
        gap: 10,
        backgroundColor: COLORS.bisquePrimary,
        borderRadius: 16,
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        color: COLORS.black,
        fontSize: 24
    },
    label: {
        fontSize: 24,
        color: COLORS.black
    },
    iconLeft: {
        width: 35,
        height: 35,
    },
    iconRight: {
        width: 25,
        height: 25,
    }
})


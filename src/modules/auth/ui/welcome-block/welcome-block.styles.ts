import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 100,
        width: 100
    },
    title: {
        fontSize: 32,
        color: COLORS.brownPrimary
    }
})
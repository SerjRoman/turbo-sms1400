import { StyleSheet } from "react-native";
import { COLORS } from '../../../../shared/ui/colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:402,
        height:200
    },
    text: {
        color: COLORS.pinkPrimary,
        fontSize: 32, 
        marginTop: 10,
        textAlign: "center",
        fontWeight: "400",
    },
    image: {
        width:100,
        height:100
    }
})
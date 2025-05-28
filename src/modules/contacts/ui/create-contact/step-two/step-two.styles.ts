import { StyleSheet } from "react-native"
import { COLORS } from "../../../../../shared/ui/colors"

export const styles = StyleSheet.create({
    container: {

    },
    inputsContainer: {
        
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    },
    imageWrapper: {
        position: "relative",
        width: 75,
        height: 75,
    },
    searchIcon: {
        position: "absolute",
        top: 20, 
        right: 20,
    },
    uploadText: {
        fontSize: 14,
        color: COLORS.black,
        fontWeight: "500",
    },
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    userContainer: {
        alignItems: "center",
        marginVertical: 16,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    userText: {
        fontSize: 16,
        marginTop: 8,
    },
    errorText: {
        color: "red",
        fontSize: 14,
        marginVertical: 8,
    },
});
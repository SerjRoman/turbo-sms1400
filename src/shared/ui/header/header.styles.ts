import { StyleSheet } from "react-native"
import { COLORS } from "../colors"

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.bisquePrimary,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.brownPrimary,
        gap: 5,
        padding: 10
    },
    titleBlock:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'space-between'
    },
    // flex
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: 'black',
        fontWeight: 400
    },
    headerLeft: {

    },
    headerRight: {

    },
    headerBottom: {

    },
})
import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../shared/ui/colors'


export const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    inputBox: {
        height: 60,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 16,
        backgroundColor: COLORS.bisqueSecondary,
    },
    submit: {
        alignSelf: "center",
        position: "absolute",
        top: 650
    },
    fields: {
        alignContent: "center",
        flexDirection: "column",
        paddingTop: 160,
    },
    field: {
        paddingTop: 100,
    },
})
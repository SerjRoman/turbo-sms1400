import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../shared/ui/colors'


export const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        gap: 30
    },
    inputBox: {
        height: 60,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 16,
        backgroundColor: COLORS.bisqueSecondary,
    },
    inputs: {
        flex: 4,
        gap: 10
    }

})
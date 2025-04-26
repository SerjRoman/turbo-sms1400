import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../shared/ui/colors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
    },
    submitButton: {
        fontSize: 24,
        fontWeight: 500,
    },
    bottomContainer:{
        flexDirection:"row", 
        gap: 5, 
        marginTop:30
    },
    bottomLink:{
        color: COLORS.pinkPrimary
        
    },
    bottomText:{
        fontSize: 16,
        color: COLORS.grey
    },
})
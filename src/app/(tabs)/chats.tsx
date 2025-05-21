import { StatusBar, Text, View } from 'react-native'
import { HeaderChats } from '../../modules/chats/ui/header/headerChats'

export default function Chats(){

    return(
        <View style={{flex: 1, gap: 20}}>
            {/* <StatusBar/> */}
            <Text>chats</Text>
        </View>
    )
}
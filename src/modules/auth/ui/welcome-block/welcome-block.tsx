import { View, Text } from "react-native";
import { LogoImage } from "../../../../shared/ui/images";
import { styles } from "./welcome-block.styles";

export function WelcomeBlock(){
    return (
        <View style={styles.container}>
            <LogoImage style={styles.image}/>
            <Text style={styles.title}>Welcome to TurboSMS</Text>
        </View>
    )
}
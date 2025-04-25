import { View, Text } from "react-native";
import { LogoImage } from "../../../../shared/ui/images";
import { styles } from "./welcome-block.styles";

export function WelcomeBlock(){
    return (
        <View style={styles.container}>
            <LogoImage style={{width: 100, height: 100}}/>
            <Text style={styles.textWelcomeBlock}>Welcome to TurboSMS</Text>
        </View>
    )
}
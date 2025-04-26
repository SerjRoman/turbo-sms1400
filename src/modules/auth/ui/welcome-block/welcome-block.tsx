import { View, Text } from "react-native";
import { LogoImage } from "../../../../shared/ui/images";
import { styles } from "./welcome-block.styles";
import { COLORS } from "../../../../shared/ui/colors";

export function WelcomeBlock(){
    return (
        <View style={styles.container}>
            <LogoImage style={{width:100, height:100}}/>
            <Text style={{color: COLORS.brownPrimary,
                fontSize: 36, 
                marginTop: 10,
                textAlign: "center",
                fontWeight: "400",
            }}>Welcome to TurboSMS</Text>
        </View>
    )
}
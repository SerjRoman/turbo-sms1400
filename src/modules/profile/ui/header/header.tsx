import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../../../shared/ui/header"
import { LogoImage } from "../../../../shared/ui/images"
import { COLORS } from "../../../../shared/ui/colors"
import { TouchableOpacity } from "react-native"

export function HeaderProfile() {
    return (
        <Header
            title="Profile"
            headerLeft={
                <LogoImage style={{ width: 40, height: 40 }} />
            }
            headerRight={
                <TouchableOpacity style={{ width: 40, }}>
                    <LogoImage style={{ width: 40, height: 23.33, display: "none" }} />
                </TouchableOpacity>
            }
        />
    )
}
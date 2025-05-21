import { TouchableOpacity, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../../../shared/ui/header"
import PlusIcon from "../../../../shared/ui/icons/plus-icon"
import { COLORS } from "../../../../shared/ui/colors"
import BackIcon from "../../../../shared/ui/icons/back-icon"

export function HeaderSettings() {
    return (
        <SafeAreaView edges={["top"]} style={{ backgroundColor: COLORS.bisquePrimary }}>
            <Header
                title="Settings"
                headerLeft={
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <BackIcon style={{ width: 16, height: 16, }} />
                        <Text style={{color: COLORS.brownPrimary, fontSize: 22, fontWeight: 400}}>Back</Text>
                    </TouchableOpacity>
                }
                headerRight={
                    <TouchableOpacity style={{ width: 40, }}>
                        <PlusIcon style={{ width: 40, height: 23.33, display: "none"}} />
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>

    )
}
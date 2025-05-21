import { TouchableOpacity } from "react-native"
import { Header } from "../../../../shared/ui/header"
import PlusIcon from "../../../../shared/ui/icons/plus-icon"
import SearchIcon from "../../../../shared/ui/icons/search-icon"
import { LogoImage } from "../../../../shared/ui/images"
import { Input } from "../../../../shared/ui/input"
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS } from "../../../../shared/ui/colors"

export function HeaderContacts() {
    return (
        <SafeAreaView edges={["top"]} style={{ backgroundColor: COLORS.bisquePrimary }}>
            <Header
                title="Contacts"
                headerLeft={
                    <LogoImage style={{ width: 40, height: 40 }} />
                }
                headerRight={
                    <TouchableOpacity>
                        <PlusIcon style={{ width: 23.33, height: 23.33 }} />
                    </TouchableOpacity>
                }
                headerBottom={
                    <Input
                        placeholder="Search"
                        style={{ width: '100%', height: 40, borderRadius: 16, paddingLeft: 45, gap: 10, paddingRight: 10 }}
                        leftIcon={<SearchIcon style={{ width: 23.33, height: 23.33 }} />}
                    />
                }
            />
        </SafeAreaView>
    )
}
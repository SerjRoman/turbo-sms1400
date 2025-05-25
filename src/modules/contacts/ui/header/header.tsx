import { TouchableOpacity } from "react-native";
import { Header } from "../../../../shared/ui/header";
import { PlusIcon, SearchIcon } from "../../../../shared/ui/icons";
import { LogoImage } from "../../../../shared/ui/images";
import { Input } from "../../../../shared/ui/input";
import { useRouter } from "expo-router";
export function HeaderContacts() {
	const router = useRouter();
	return (
		<Header
			title="Contacts"
			headerLeft={<LogoImage style={{ width: 40, height: 40 }} />}
			headerRight={
				<TouchableOpacity
					onPress={() => {
						router.push("/modals/create-contact-step-one");
					}}
				>
					<PlusIcon style={{ width: 23.33, height: 23.33 }} />
				</TouchableOpacity>
			}
			headerBottom={
				<Input
					placeholder="Search"
					style={{
						width: "100%",
						height: 40,
						borderRadius: 16,
						paddingLeft: 45,
						gap: 10,
						paddingRight: 10,
					}}
					leftIcon={
						<SearchIcon style={{ width: 23.33, height: 23.33 }} />
					}
				/>
			}
		/>
	);
}

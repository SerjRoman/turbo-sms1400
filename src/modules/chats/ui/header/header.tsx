import { TouchableOpacity, Text } from "react-native";
import { Header } from "../../../../shared/ui/header";
import { PlusIcon, SearchIcon } from "../../../../shared/ui/icons/";
import { LogoImage } from "../../../../shared/ui/images";
import { BackIcon } from "../../../../shared/ui/icons";
import { Input } from "../../../../shared/ui/input";
import {useRouter} from "expo-router"
import { COLORS } from "../../../../shared/ui/colors";

export function HeaderChats() {
	return (
		<Header
			title="Chats"
			headerLeft={<LogoImage style={{ width: 40, height: 40 }} />}
			headerRight={
				<TouchableOpacity>
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

export function HeaderChatsCreate() {
	const router = useRouter()
	return (
		<Header
			title="Create Chat"
			headerLeft={
				<TouchableOpacity
					onPress={() => {
						if (router.canGoBack()) {
							router.back();
						}
					}}
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 5,
					}}
				>
					<BackIcon
						style={{ width: 16, height: 16 }}
						fill={COLORS.brownPrimary}
					/>
					<Text
						style={{
							color: COLORS.brownPrimary,
							fontSize: 22,
							fontWeight: 400,
						}}
					>
						Back
					</Text>
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

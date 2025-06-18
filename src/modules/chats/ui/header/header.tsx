import { TouchableOpacity, Text } from "react-native";
import { Header } from "../../../../shared/ui/header";
import { BackIcon, PlusIcon, SearchIcon } from "../../../../shared/ui/icons/";
import { LogoImage } from "../../../../shared/ui/images";
import { Input } from "../../../../shared/ui/input";
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

export function HeaderChat() {
	return (
		<Header
			title="Chats"
			headerLeft={<TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
								<BackIcon style={{ width: 16, height: 16, }} />
								<Text style={{color: COLORS.brownPrimary, fontSize: 22, fontWeight: 400}}>Back</Text>
							</TouchableOpacity>}
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

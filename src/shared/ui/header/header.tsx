import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./header.styles";
import { IHeaderProps } from "./header.types";
import { BackIcon, PlusIcon } from "../icons";
import { COLORS } from "../colors";
import { useRouter } from "expo-router";

export function Header(props: IHeaderProps) {
	const { title, headerLeft, headerRight, headerBottom } = props;
	return (
		<View style={styles.headerContainer}>
			<View style={styles.titleBlock}>
				{headerLeft && (
					<View style={styles.headerLeft}>{headerLeft}</View>
				)}
				{title && <Text style={styles.title}>{title}</Text>}
				{headerRight && (
					<View style={styles.headerRight}>{headerRight}</View>
				)}
			</View>
			{headerBottom && (
				<View style={styles.headerBottom}>{headerBottom}</View>
			)}
		</View>
	);
}

export function HeaderBack(props: IHeaderProps) {
	const { title } = props;
	const router = useRouter();
	return (
		<Header
			title={title}
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
			headerRight={
				<TouchableOpacity style={{ width: 40 }}>
					<PlusIcon
						style={{ width: 40, height: 23.33, display: "none" }}
					/>
				</TouchableOpacity>
			}
		/>
	);
}

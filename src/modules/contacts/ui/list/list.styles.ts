import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: "row",
		gap: 5,
		padding: 5,
	},
	imageBlock: {},
	textBlock: {
		alignItems: "flex-start",
		gap: 5,
		justifyContent: "center",
	},
	avatar: {
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
	},
	localName: {
		fontSize: 22,
	},
});

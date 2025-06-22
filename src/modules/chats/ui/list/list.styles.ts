import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	item: {
		width: "100%",
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#C8C8C8'
	},
	avatar:{
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	}
	textBlock: {
		alignItems: "flex-start",
		gap: 5,
		justifyContent: "center",
	},
	localName: {
		fontSize: 22,
	},
	imageBlock: {}
});

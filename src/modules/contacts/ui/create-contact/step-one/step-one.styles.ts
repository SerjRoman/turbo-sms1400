import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		padding: 30,
		alignItems: "center",
	},
	searchUser: {
		height: 40,
		width: "100%",
	},
	userContainer: {
		height: 200,
		width: 200,
		gap: 5,
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	userAvatar: {
		width: 150,
		height: 150,
		borderRadius: 25,
	},
	userText: {
		fontSize: 22,
		textAlign: "center",
	},
	userError: {
		color: COLORS.error,
		fontSize: 24,
	},
});

import { FlatList, FlatListProps } from "react-native";

export function List<T>(props: FlatListProps<T>) {
	return <FlatList {...props} />;
}

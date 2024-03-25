import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
	return (
		<View
			style={{
				width: "100%",
				height: "10%",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
				gap: 8,
				backgroundColor: "tan",
			}}
		>
			<TouchableOpacity
				style={{ backgroundColor: "teal", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}
			>
				<Text>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ backgroundColor: "teal", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}
			>
				<Text>Profile</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{ backgroundColor: "teal", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 }}
			>
				<Text>Settings</Text>
			</TouchableOpacity>
		</View>
	);
};
export default Home;

// In App.js in a new project

import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Carousel from "./components/Carousel";

function App() {
	return (
		<View>
			<SafeAreaView>
				<Carousel />
			</SafeAreaView>
		</View>
	);
}

export default App;

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	AppRegistry
} from 'react-native';

export default class Toolbar extends React.Component{
	render() {
		return (
			<View>
				<Text>ToolBar</Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Toolbar', () => Toolbar);

import React, { Component  } from 'react'
import {
	View,
	Switch,
	StyleSheet

} 
from 'react-native'

export default SwitchExample = (props) => {
	return (
		<View style = {styles.container}>
			<Switch
				onValueChange = {(value, zone) => (props.toggleSwitch(value, props.zone))} 
				value = {props.switchValue}/>
		</View>
		
	)

}
const styles = StyleSheet.create ({
	container: {
		alignItems: 'center',
	}
})

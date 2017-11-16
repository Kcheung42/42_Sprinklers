import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';
import * as firebase from 'firebase'
import Toolbar from './components/Toolbar/Toolbar';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyB3RZQS46cqoVGDwvTVlih6N01LRD3atRY",
    authDomain: "sprink-3680f.firebaseapp.com",
    databaseURL: "https://sprink-3680f.firebaseio.com",
    projectId: "sprink-3680f",
    storageBucket: "sprink-3680f.appspot.com",
    messagingSenderId: "492472444407"
  };
const firebaseApp = firebase.initializeApp(config);

export default class App extends Component {
	constructor(){
		super();
		let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
		this.state = {
			itemDataSource: ds
		}
		this.itemsRef = this.getRef().child('Sprink')
		this.renderRow = this.renderRow.bind(this);
	}

	getRef(){
		return firebaseApp.database().ref()
	}

	componentWillMount(){
		this.getItems(this.itemsRef);
	}

	componentDidMount(){
		this.getItems(this.itemsRef);
	}

	getItems(itemsRef){
		// let items = [{title: 'Item One'}, {title: 'Item Two'}];
		itemsRef.on('value', (snap) => {
			let items = [];
			snap.forEach((child) => {
				items.push({
					status: child.val().status,
					duration: child.val().duration,
					_key: child.key
				});
			});
			console.log(items)
			this.setState({
				itemDataSource: this.state.itemDataSource.cloneWithRows(items)
			});
		});
	}

	renderRow(item){
		return(
			<Text>{item._key}:{item.status}:{item.duration}</Text>
		)
	}

	render() {
	// console.log(firebaseApp.name);
	return (
	  <View style={styles.container}>
		<Text>Hello World!</Text>
		<Toolbar/>
		<ListView
			dataSource={this.state.itemDataSource}
			renderRow={this.renderRow}
		/>
	  </View>
	);
  }
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});

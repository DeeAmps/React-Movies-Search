/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

 class App extends Component {
  constructor(props){
     super(props)
  }
  render() {
    return (
      <View style={styles.container}>
          <SearchBar
          placeholder="Type Here..."
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;

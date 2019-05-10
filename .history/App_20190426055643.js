/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View, Text} from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

 class App extends Component {
  constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
      this.state = {
        searchValue : ''
      }
    }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Header
        centerComponent={{ text: 'MOVIES DB', style: { color: '#fff' } }}
      />
          <SearchBar
          placeholder="Search Movie..."
          onChange={this.handleChange}
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

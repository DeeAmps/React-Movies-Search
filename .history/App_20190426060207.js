/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View, Text} from 'react-native';
import { SearchBar, Header, Button } from 'react-native-elements';

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
      <View>
      <Header style={styles.header}
        centerComponent={{ text: 'MOVIES DB', style: { color: '#fff' } }}
      />
      <View style={styles.searchHeader}>
        <SearchBar
            placeholder="Search Movie..."
            onChange={this.handleChange}
        />
        <Button
          title="Search"
        />
      </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    height: 10
  },
  searchHeader : {
    flex: 1,
    flexDirection: 'row'
  }
});

export default App;

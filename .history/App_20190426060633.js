/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View, StatusBar} from 'react-native';
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
        <StatusBar hidden={true}/>
        <Header style={styles.header}
          centerComponent={{ text: 'MOVIES DB', style: { color: '#fff' } }}
        />
        <View style={styles.searchHeader}>
          <SearchBar style={styles.searchInput}
              placeholder="Search Movie..."
              onChange={this.handleChange}
          />
          <Button style={styles.searchButton}
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
  searchInput : {
    width: '80%'
  },
  searchButton: {
    width: '20%'
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

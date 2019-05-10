/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

 class App extends Component {
  constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
      this.state = {  
        searchValue : ''
      }
    }

    handleChange(search) {
      this.setState({ searchValue: search });
    };
  
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Movies', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View >
          <SearchBar
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
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
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    marginBottom: 25
  },
  searchButton: {
    flex: 2
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

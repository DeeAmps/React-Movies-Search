/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View } from 'react-native';
import { SearchBar, Header, ThemeProvider } from 'react-native-elements';

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
      <ThemeProvider>
        <Header
          centerComponent={{ text: 'Movies', style: { color: '#fff' } }}
        />
        <View >
          <SearchBar
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
          />
         
        </View>       
      </ThemeProvider>
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

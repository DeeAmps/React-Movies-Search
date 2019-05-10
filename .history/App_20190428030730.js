/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View } from 'react-native';
import { SearchBar, Header, ThemeProvider, Button } from 'react-native-elements';

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
        <View style={styles.searchView}>
          <SearchBar
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
              style={styles.searchInput}
          />
         <Button
            title="Solid Button"
            style={styles.searchButton}
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
  searchView: {
    flexDirection: 'row',
    alignItems: 'stretch',
    
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    width: 380
  },
  searchButton: {
    height: 100
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

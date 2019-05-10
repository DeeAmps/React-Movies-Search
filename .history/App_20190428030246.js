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
             
          />
         <Button
            title="Solid Button"
            
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
    padding: 5
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    flex: 1
  },
  searchButton: {
    flex: 1
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

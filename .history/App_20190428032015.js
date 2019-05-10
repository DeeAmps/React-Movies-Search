/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View , Button, TextInput} from 'react-native';

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
       
        <View style={styles.searchView}>
          <TextInput
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
              style={styles.searchInput}
          />
         <Button
            title="Search"
            style={styles.searchButton}
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
  searchView: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding : 10
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    width: '82%'
  },
  searchButton: {
    flex: 1,
    padding: 20
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View , Text, TouchableOpacity, TextInput} from 'react-native';

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
         <TouchableOpacity  style={styles.searchButton} >
            <Text style={{color: 'white', padding :10}}>Search</Text>
          </TouchableOpacity>
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
    paddingTop: 5
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    width: '82%',
    borderWidth: 1
  },
  searchButton: {
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: '#99AAFF',
   width: 70,
   height: 50,
   marginLeft: 5
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

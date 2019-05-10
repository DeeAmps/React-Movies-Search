/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View, StatusBar } from 'react-native';
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
      <View style={{ marginTop: 5 }}>
        <StatusBar hidden={true}/>
        {/* <Header 
          centerComponent={{ text: 'MOVIES DB', style: { color: '#fff' } }}
        /> */}
        <View >
          <SearchBar style={}
              placeholder="Search Movie..."
              onChange={this.handleChange}
          />
          <Button style={{ marginTop: 10 }}
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

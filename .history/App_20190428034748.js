import React, {Component} from 'react';
import  { StyleSheet, View , Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';

 class App extends Component {
  constructor(props){
     super(props);
     let url = "https://api.themoviedb.org/3/search/movie?api_key=6b12c26f2301ccb53cc292088c4f1741";
     this.handleChange = this.handleChange.bind(this);
      this.state = {  
        searchValue : '',
        movies: []
      }
    }

  handleChange(search) {
    this.setState({ searchValue: search });
  };

  searchMovies() {

  }
  
  render() {
    return (
      <ScrollView>
       <View style={styles.header}>
         <Text style={{color:'white', fontSize: 20, textAlign: 'center', padding: 5}}>Movies DB</Text>
       </View>
        <View style={styles.searchView}>
          <TextInput
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
              style={styles.searchInput}
          />
         <TouchableOpacity onPress={this.seachMovies}  style={styles.searchButton} >
            <Text style={{color: 'white', padding :10}}>Search</Text>
          </TouchableOpacity>
        </View>       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    height: 40,
    backgroundColor: '#1acec5'
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 5
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    width: '82%',
    borderWidth: 1,
    borderRadius: 5
  },
  searchButton: {
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: '#99AAFF',
   width: 68,
   height: 50,
   marginLeft: 5
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;

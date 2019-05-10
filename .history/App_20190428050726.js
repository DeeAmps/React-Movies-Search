import React, {Component} from 'react';
import  { Alert, StyleSheet, View , Text, TextInput, ScrollView, Button} from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios';

class App extends Component {
  constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.searchMovies = this.searchMovies.bind(this);
      this.state = {  
        searchValue : '',
        movies: []
      }
    }

  handleChange(search) {
    this.setState({ searchValue: search });
  };

  searchMovies(){
    if(this.state.searchValue == "" || this.state.searchValue == null){
      Alert.alert("", "Please type a movie to search");
      return;
    }
    Alert.alert("", this.state.searchValue)
    // let url = "https://api.themoviedb.org/3/search/movie?api_key=6b12c26f2301ccb53cc292088c4f1741&query=" + this.state.searchValue;
    // axios.get(url)
    // .then(function(response) {
    //   let data = response.data;
    //   Alert.alert("",  String(data.total_results))
    //   this.setState({
    //     searchValue: '',
    //     movies: data.results
    //   })
    // })
    // .catch(function(error) {
    //   Alert.alert("An error occurred!", error.response.data)
    // })
  }
  
  render() {
    return (
      <View>
       <View style={styles.header}>
         <Text style={{color:'white', fontSize: 20, textAlign: 'center', padding: 5}}>Movies DB</Text>
       </View>
        <View style={styles.searchView}>
          <TextInput
              placeholder="Search Movie..."
              onChange={this.handleChange}
              style={styles.searchInput}
              value={this.state.searchValue}
          />
          <Button
            onPress={this.searchMovies}
            title="Search"
            style={styles.searchButton}
/>
        </View>  
        <ScrollView>
          <Card containerStyle={{padding: 10}} >
            {
              this.state.movies.forEach(function(movie) {
                let image = "http://image.tmdb.org/t/p/w185" + movie.poster_path
                return (
                  <ListItem
                    leftAvatar={{ source: { uri:  image } }}
                    title={movie.title}
                    subtitle={movie.overview}
                  />
                );
              })
            }
          </Card>
        </ScrollView>     
      </View>
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
    borderRadius: 5,
    marginRight: 5
  },
  searchButton: {
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: '#99AAFF',
   padding: 15
  }
});

export default App;

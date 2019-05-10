import React, {Component} from 'react';
import  { Alert, StyleSheet, View , Text, TextInput, ScrollView, Button} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { CardViewWithImage } from "react-native-simple-card-view";
import axios from 'axios';

class App extends Component {
  constructor(props){
     super(props);
     this.searchMovies = this.searchMovies.bind(this);
      this.state = {  
        searchValue : '',
        movies: []
      }
    }

  

    searchMovies(){
    var self = this;
    if(this.state.searchValue == "" || this.state.searchValue == null){
      Alert.alert("", "Please type a movie to search");
      return;
    }
    let url = "https://api.themoviedb.org/3/search/movie?api_key=6b12c26f2301ccb53cc292088c4f1741&query=" + this.state.searchValue;
    axios.get(url)
    .then(function(response) {
      let data = response.data;
      self.setState({
        searchValue: '',
        movies: data.results
      })
    })
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
              onChangeText={(searchValue) => this.setState({searchValue})}
              value={this.state.searchValue}
              style={styles.searchInput}
              
          />
          <Button
            onPress={this.searchMovies}
            title="Search"
            style={styles.searchButton}
/>
        </View>  
        <ScrollView>
          
            {
              this.state.movies.map(function(movie, i) {
                let image = "http://image.tmdb.org/t/p/w185" + movie.poster_path
                
                return (
                  <CardViewWithImage
                    width={ 100 }
                    key={i}
                    source={ {uri: image } }
                    content={  movie.overview }
                    title={ movie.title }
                    imageWidth={ '100%' }
                    imageHeight={ 100 }
                    roundedImage={ false }
                />
                  // <Card containerStyle={{padding: 10}} >
                  // <ListItem
                  //   key={i}
                  //   leftAvatar={{ source: { uri:  image } }}
                  //   title={ movie.title }
                  //   subtitle={ movie.overview }
                  // />
                  //  </Card>
                );
              })
            }
         
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

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from './src/assets/awesome-place.jpeg'

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    if (placeName.trim() === "") return;
    else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat({
            key: `${Math.random()}`,
            name: placeName,
            image: {
              uri: 'https://placekitten.com/1200/900'
            }
          })
        };
      });
    }
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

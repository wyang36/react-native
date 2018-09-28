import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeImage from "./src/assets/awesome-place.jpeg";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
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
              uri: "https://placekitten.com/1200/900"
            }
          })
        };
      });
    }
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(
          place => place.key !== prevState.selectedPlace.key
        ),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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

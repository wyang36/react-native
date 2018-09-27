import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => (
  <View style={styles.listContainer}>
    {props.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;

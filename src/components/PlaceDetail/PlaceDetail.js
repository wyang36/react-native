import React from "react";
import { Modal, View, Text, Image, Button, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide" onRequestClose={props.onModalClosed}>
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  }
});
export default placeDetail;

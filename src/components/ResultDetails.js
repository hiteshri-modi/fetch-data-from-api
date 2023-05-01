import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text> Title : {item.title} </Text>
      <Image source={{ uri: item.url }} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // alignItems:"center",
    margin: 30,
  },
  photo: {
    width: "80%",
    height: 100,
    borderWidth: 10,
    marginTop: 5,
    marginBottom: 20,
  },
});

export default ResultDetails;

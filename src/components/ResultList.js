import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";

const ResultList = ({ results }) => {
 

  const ItemView = ({ item }) => {
    return <Text> {item.title}</Text>;
  };

  const getResults = () => {
    return results;
  };

  return (
    <View>
      <Text>ResultList</Text>

      <FlatList
        data={results}
        // keyExtractor={(results) => results.id}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        onEndReached={fetchMoreResults}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultList;

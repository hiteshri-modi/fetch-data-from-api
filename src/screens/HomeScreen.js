import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const apiURL = "https://jsonplaceholder.typicode.com/photos";

  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  const getApiData = () => {
    try {
      axios
        .get(apiURL, {
          params: {
            _limit: 10,
            _page: page,
          },
        })
        .then((response) => {
          const res = response.data;
          page === 1 ? setResults(res) : setResults([...results, ...res]);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreResults = () => {
    setPage(page + 1);
  };

  const getResults = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", { item });
        }}
      >
        <Image source={{ uri: item.thumbnailUrl }} style={styles.photo} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getApiData();
  }, [page]);

  return (
    <View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={getResults}
        onEndReached={fetchMoreResults}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  photo: {
    width: "100%",
    height: 150,
    borderWidth: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
});

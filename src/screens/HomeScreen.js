import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
//import { useEffect} from "react-native";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import ResultList from "../components/ResultList";

export default function HomeScreen({navigation}) {
  const apiURL = "https://jsonplaceholder.typicode.com/photos";

  const [isLoading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const [page, setPage] = useState(1);

  const getApiData = () => {
    console.log("in getApiData");

    try {
       axios
        .get(apiURL, {
          params: {
            _limit: 10,
            _page: page,
          },
        })
       // .then(response=>response.json())
        .then((response) => {
          console.log("page=" + page);
          console.log(response.data);
          const res=response.data;
           page === 1
             ? setResults(res)
             : setResults([...results, ...res]);
          //setResults(results => [...results, ...res])
          console.log(results.length);
        //  console.log(results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreResults = () => {
    setPage(page + 1);
  };

  const getResults = () => {
    return results;
  };

  useEffect(() => {
    getApiData();
    
  }, [page]);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text> {results.length}</Text>

      {/* <ResultList results = {getResults()} /> */}

      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator = {false}
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            
            <TouchableOpacity
                 onPress={()=>{navigation.navigate('Detail',{item})}}
            >
               <Text style={styles.title}>{item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={{ uri: item.thumbnailUrl }} style={styles.photo} />
            </TouchableOpacity>
          );
        }}
        onEndReached={fetchMoreResults}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: 300,
    height: 100,
    borderWidth: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

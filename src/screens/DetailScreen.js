import React from "react";
import ResultDetails from "../components/ResultDetails";
import { View ,Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View>
        <ResultDetails item={item}/>

         <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
          <Text style={styles.title}> Go Back to HomeScreen</Text>
          </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
   title: {
    fontSize: 18,
    fontWeight: "bold",
    margin:20,
    alignItems:"center",
    textDecorationLine:"underline"
  },});
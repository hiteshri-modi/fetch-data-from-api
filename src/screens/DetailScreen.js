import React from "react";
import { Text,View,StyleSheet,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function DetailScreen({route, navigation}){

    const {item}= route.params;
    
    return(
        <View>
            <Text>Detail Screen </Text>
            <Text> Album id : {item.albumId} </Text>
            <Text>  id : {item.id} </Text>
            <Text> Title : {item.title} </Text>
            <Image source={{ uri: item.url }} style={styles.photo} />

            <TouchableOpacity 
                onPress={() => {navigation.navigate('Home')}}        
                >
                <Text style={styles.title}> Go Back to HomeScreen</Text>
            </TouchableOpacity>
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
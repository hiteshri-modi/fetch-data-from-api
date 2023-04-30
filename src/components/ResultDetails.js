import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const ResultDetails = ({results}) =>{
    console.log(results.title);
    return(
       
        <View>
            <Text>
            result - {results.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ResultDetails;
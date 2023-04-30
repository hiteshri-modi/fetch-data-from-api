import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    return(
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{        
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
            }
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen}/> 
       
      </Stack.Navigator>
    )
  } 

  
 export default function AppContainer() {
    return(
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    )
  } 
   
  
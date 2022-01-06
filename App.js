import * as React from 'react';
import { View, Text, Button,SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import KontaktScreen from './screens/KontaktScreen';
import AdresScreen from './screens/AdresScreen';
import PomocScreen from './screens/PomocScreen';

const HomeStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
{/*
const HomeStackScreen =({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#800000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} >
          <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
  );
  
  const MenuStackScreen =({navigation}) =>(
    <MenuStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#800000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }} >
            <MenuStack.Screen name="Menu" component={MenuScreen} />
          </MenuStack.Navigator>
    );
        */}


const App = () => {
  return (
    <NavigationContainer> 
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#800000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          title: 'Strona główna',
          alignItems: 'center',
          justifyContent: 'center'
        }} />
        <Drawer.Screen name="Kontakt" component={KontaktScreen} />
        <Drawer.Screen name="Adres" component={AdresScreen} />
        <Drawer.Screen name="Pomoc" component={PomocScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
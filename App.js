import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

import MenuScreen from './screens/MenuScreen';
import RezerwacjeScreen from './screens/RezerwacjeScreen';
import ZamowieniaScreen from './screens/ZamowieniaScreen';
import RachunkiScreen from './screens/RachunkiScreen';
import GrafikScreen from './screens/GrafikScreen';
import LoginScreen from './screens/Login';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Rezerwacje" component={RezerwacjeScreen} />
      <Stack.Screen name="Zamowienia" component={ZamowieniaScreen} />
      <Stack.Screen name="Rachunki" component={RachunkiScreen} />
      <Stack.Screen name="Grafik" component={GrafikScreen} />
    </Stack.Navigator>
    
  );
}


const App = () => {
  return (
    <NavigationContainer> 
    <MyStack />
    </NavigationContainer>

  );
}

export default App;
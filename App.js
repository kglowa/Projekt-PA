import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, Text } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ZamowieniaScreen from './screens/ZamowieniaScreen';
import RezerwacjeScreen from './screens/RezerwacjeScreen';
import GrafikScreen from './screens/GrafikScreen';
import InformacjeScreen from './screens/InformacjeScreen';
import DrinkScreen from './screens/DrinkScreen';
import BeerScreen from './screens/BeerScreen';

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="Drinki"
                component={DrinkScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Image
                                source={require('./icons/drink.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d94214' : '#000000',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Karta"
                component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Image
                                source={require('./icons/menuMain.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d94214' : '#000000',
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Piwa"
                component={BeerScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Image
                                source={require('./icons/beer.jpg')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d94214' : '#000000',
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="CieKawa"
            screenOptions={{
                drawerActiveTintColor: "#000000",
                drawerStyle: {
                    backgroundColor: "#d94214",
                    width: 180,
                },
            }}
        >
            <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MyTab} />
            <Drawer.Screen name="Rezerwacje" component={RezerwacjeScreen} />
            <Drawer.Screen name="Zamówienia" component={ZamowieniaScreen} />
            <Drawer.Screen name="Grafik pracy" component={GrafikScreen} />
            <Drawer.Screen name="Informacje" component={InformacjeScreen} />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="CieKawa" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
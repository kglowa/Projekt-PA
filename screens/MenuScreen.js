
import * as React from 'react';
import {  Alert, Text } from 'react-native';
import  { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import BeerScreen from './BeerScreen';
const DATA = [
  {
    id: "1",
    title: "Doritos",
    describe:"BBQ/Ser/Sweet Chilli",
    price:"7PLN",

  },
  {
    id: "2",
    title: "Orzeszki",
    describe:"Slone/Cebula/Wasabi",
    price:"6PLN",


  },
  {
    id: "3",
    title: "Paluszki",
    describe:"Slone/Sezamowe",
    price:"4PLN",


  },
  {
    id: "4",
    title: "Cola",
    describe:"Zero/Zwykla/Wisniowa",
    price:"4PLN",


  },
  {
    id: "5",
    title: "Sok",
    describe:"Pomoranczowa/Jablko/Porzeczka",
    price:"4PLN",


  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title} {item.price}</Text>
  </TouchableOpacity>
);

const MenuScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#E88D72" : "#d94214";
    const color = item.id ===  'black';

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id); Alert.alert(item.describe)}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 3,
    flexDirection: 'row',
      marginHorizontal: 20,
      
  },
  item: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default MenuScreen;

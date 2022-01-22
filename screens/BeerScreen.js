
import * as React from 'react';
import {  Alert, Text } from 'react-native';
import  { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Luis",
    describe:"Nepomucen Stout",
    price:"11PLN",

  },
  {
    id: "2",
    title: "Pink Passion",
    describe:"Magic Road Sour Ale",
    price:"15PLN",
  },
  {
    id: "3",
    title: "Kia Ora",
    describe:"DIPA/IIPA",
    price:"14PLN",

  },
  {
    id: "4",
    title: "Guiness",
    describe:"ciemne piwo górnej fermentacji typu stout",
    price:"9PLN",

  },
  {
    id: "5",
    title: "Fairies Wear Hops",
    describe:"India Pale Ale",
    price:"13PLN",


  },
  {
    id: "6",
    title: "Robin",
    describe:"Nepomucen New England IPA",
    price:"12PLN",

  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title} {item.price}</Text>
  </TouchableOpacity>
);

const BeerScreen = () => {
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

export default BeerScreen;

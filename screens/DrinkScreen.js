
import * as React from 'react';
import {  Alert, Text } from 'react-native';
import  { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import BeerScreen from './BeerScreen';
const DATA = [
  {
    id: "1",
    title: "Red Gentelman",
    describe:"50ml red stag JimBeam\n30ml wisniowka Saska\ncwiartka cytryny\ndopełnić wodą gazowaną",
    price:"20PLN",

  },
  {
    id: "2",
    title: "Martini",
    describe:"150ml martini\n150ml tonic",
    price:"14PLN",


  },
  {
    id: "3",
    title: "Bitter Pink",
    describe:"50ml gin truskawkowy Bosford\ntruskawki\ndopelnic schwepsem pink tonic",
    price:"4PLN",


  },
  {
    id: "4",
    title: "Cuba Libre",
    describe:"50ml ciemnego rumu\nlimonka\ndopelnic cola",
    price:"14PLN",


  },
  {
    id: "5",
    title: "Apple Jim",
    describe:"50min JimBeam Apple\n150ml sok jabłkowy\nćwiartka limonki\nmięta",
    price:"14PLN",


  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title} {item.price}</Text>
  </TouchableOpacity>
);

const DrinkScreen = () => {
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
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius:15,
    alignItems:'center'
  },
  title: {
    fontSize: 20,
  },
});

export default DrinkScreen;

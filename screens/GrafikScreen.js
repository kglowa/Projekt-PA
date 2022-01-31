import React, { useState, Fragment, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollText, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';

const GrafikScreen = ({ navigation }) => {
  return (
    <>
      <Calendar
        firstDay={1}
        minDate={'2022-01-01'}
        maxDate={'2022-12-31'}
        markingType="multi-period"
        markedDates={{
          '2022-01-01': { selected: true, marked: false, selectedColor: 'red' },
          '2022-01-03': {
            periods: [
              { startingDay: true, endingDay: false, color: '#5FB404' },//zielony jasny
              { startingDay: true, endingDay: false, color: '#DBA901' },//zolty
              { startingDay: true, endingDay: false, color: '#CC2EFA' }//rozowo/fiolet
            ]
          },
          '2022-01-04': {
            periods: [
              { startingDay: false, endingDay: false, color: '#5FB404' },
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-05': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5FB404' },
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-01-06': { selected: true, marked: false, selectedColor: 'red' },
          '2022-01-10': {
            periods: [
              { startingDay: true, endingDay: false, color: '#5FB404' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },//szary
              { startingDay: true, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-11': {
            periods: [
              { startingDay: false, endingDay: false, color: '#5FB404' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-12': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5FB404' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-13': {
            periods: [
              { startingDay: true, endingDay: false, color: '#DBA901' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-14': {
            periods: [
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-01-17': {
            periods: [
              { startingDay: true, endingDay: false, color: '#5FB404' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: true, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-01-18': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5FB404' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-01-19': {
            periods: [
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-01-20': {
            periods: [
              { startingDay: true, endingDay: false, color: '#CC2EFA' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-01-21': {
            periods: [
              { startingDay: false, endingDay: true, color: '#CC2EFA' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: false, endingDay: true, color: '#DBA901' }
            ]
          },
          '2022-01-24': {
            periods: [
              { startingDay: true, endingDay: false, color: '#5FB404' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: true, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-25': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5FB404' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-26': {
            periods: [
              { startingDay: true, endingDay: false, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-27': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-01-28': {
            periods: [
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: true, endingDay: true, color: '#5FB404' },//zielony jasny
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-01-31': {
            periods: [
              { startingDay: true, endingDay: false, color: '#DBA901' },
              { startingDay: true, endingDay: false, color: '#5FB404' },//zielony jasny
              { startingDay: true, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-01': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },//zolty
              { startingDay: false, endingDay: false, color: '#5FB404' },//zielony jasny
              { startingDay: false, endingDay: false, color: '#CC2EFA' }//rozowo/fiolet
            ]
          },
          '2022-02-02': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { startingDay: false, endingDay: false, color: '#5FB404' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-03': {
            periods: [
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: false, endingDay: false, color: '#5FB404' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-04': {
            periods: [
              { startingDay: true, endingDay: true, color: '#6E6E6E' },//szary
              { startingDay: false, endingDay: true, color: '#5FB404' },  
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-02-07': {
            periods: [
              { startingDay: true, endingDay: false, color: '#5FB404' },
              { startingDay: true, endingDay: true, color: '#6E6E6E' },
              { startingDay: true, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-08': {
            periods: [
              { startingDay: false, endingDay: true, color: '#5FB404' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-09': {
            periods: [
              { startingDay: true, endingDay: false, color: '#DBA901' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-10': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-02-11': {
            periods: [
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: true, endingDay: true, color: '#5FB404' }
            ]
          },
          '2022-02-14': {
            periods: [
              { startingDay: true, endingDay: true, color: '#5FB404' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: true, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-02-15': {
            periods: [
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-02-16': {
            periods: [
              { startingDay: true, endingDay: false, color: '#CC2EFA' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#DBA901' }
            ]
          },
          '2022-02-17': {
            periods: [
              { startingDay: false, endingDay: false, color: '#CC2EFA' },
              { startingDay: false, endingDay: false, color: '#6E6E6E' },
              { startingDay: false, endingDay: true, color: '#DBA901' }
            ]
          },
          '2022-02-18': {
            periods: [
              { startingDay: false, endingDay: true, color: '#CC2EFA' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: true, endingDay: true, color: '#5FB404' }
              
            ]
          },
          '2022-02-21': {
            periods: [
              { startingDay: true, endingDay: true, color: '#5FB404' },
              { startingDay: true, endingDay: false, color: '#6E6E6E' },
              { startingDay: true, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-22': {
            periods: [
              { startingDay: true, endingDay: false, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#6E6E6E' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-23': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { color: 'transparent' },
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-24': {
            periods: [
              { startingDay: false, endingDay: false, color: '#DBA901' },
              { startingDay: true, endingDay: false, color: '#5FB404' },//zielony jasny
              { startingDay: false, endingDay: false, color: '#CC2EFA' }
            ]
          },
          '2022-02-25': {
            periods: [
              { startingDay: false, endingDay: true, color: '#DBA901' },
              { startingDay: false, endingDay: true, color: '#5FB404' },//zielony jasny
              { startingDay: false, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-02-28': {
            periods: [
              { startingDay: true, endingDay: true, color: '#DBA901' },
              { startingDay: true, endingDay: true, color: '#5FB404' },//zielony jasny
              { startingDay: true, endingDay: true, color: '#CC2EFA' }
            ]
          },
          '2022-04-17': { selected: true, marked: false, selectedColor: 'red' },
          '2022-04-18': { selected: true, marked: false, selectedColor: 'red' },
          '2022-05-01': { selected: true, marked: false, selectedColor: 'red' },
          '2022-05-03': { selected: true, marked: false, selectedColor: 'red' },
          '2022-06-05': { selected: true, marked: false, selectedColor: 'red' },
          '2022-06-16': { selected: true, marked: false, selectedColor: 'red' },
          '2022-08-15': { selected: true, marked: false, selectedColor: 'red' },
          '2022-11-01': { selected: true, marked: false, selectedColor: 'red' },
          '2022-11-11': { selected: true, marked: false, selectedColor: 'red' },
          '2022-12-25': { selected: true, marked: false, selectedColor: 'red' },
          '2022-12-26': { selected: true, marked: false, selectedColor: 'red' },
        }}
      />
      <Text style={styles.tekst}>Legenda</Text>
      <Text style={styles.napis}>Aleksandra Nowak</Text>
      <View style={{ ...styles.legenda, backgroundColor: '#DBA901' }} />
      <Text style={styles.napis}>Katarzyna Kowalczyk</Text>
      <View style={{ ...styles.legenda, backgroundColor: '#CC2EFA' }} />
      <Text style={styles.napis}>Karol Tuz</Text>
      <View style={{ ...styles.legenda, backgroundColor: '#5FB404' }} />
      <Text style={styles.napis}>Piotr Kowalski</Text>
      <View style={{ ...styles.legenda, backgroundColor: '#6E6E6E' }} />
      <Text style={styles.napis}>Święta</Text>
      <View style={{ ...styles.legenda, backgroundColor: 'red' }} />
    </>
  )
};

const styles = StyleSheet.create({
  tekst: {
    color: 'black',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 25,
    marginTop: 5,
    marginLeft: 20,
  },
  napis: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 6,
    marginLeft: 60,
  },
  legenda: {
    width: 25,
    height: 25,
    marginTop: -22,
    marginLeft: 20,
  },
});
export default GrafikScreen;
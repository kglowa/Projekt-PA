import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const InformacjeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../icons/logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.pierwsze}>Aplikacje wykonali:</Text>
      <Text style={styles.autorzy}>Kacper Głowacki</Text>
      <Text style={styles.autorzy}>Michał Gizicki</Text>
      <Text style={styles.autorzy}>Wiktoria Sikora</Text>
      <Text style={styles.autorzy}>Grupa 3ID15B</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
    image: {
        width: 250,
        height: 250,
        marginTop: 50,
    },
  pierwsze: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  autorzy: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default InformacjeScreen;
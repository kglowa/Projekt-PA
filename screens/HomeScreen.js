import * as React from 'react';
import { View, Text,Image, Button,SafeAreaView, StyleSheet, ScrollView, Alert, StatusBar } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
      <Image
      style={{width:300,height:300,marginLeft:10,bottom:100}}
      resizeMode = "contain"
      
      source = {require('../icons/logo.png')}
      />
        <View>
          <Button
            title="Menu"
            color="#800000"
            onPress={() => navigation.navigate("Menu")}
          />
        </View>
        <Separator />
        <View>

          <Button
            title="Rezerwacje"
            color="#800000"
            onPress={() => navigation.navigate("Rezerwacje")}
          />
        </View>
        <Separator />
        <View>

          <Button
            title="Zamowienia"
            color="#800000"
            onPress={() => navigation.navigate("Zamowienia")}
          />
        </View>
        <Separator />

        <View>

          <Button
            title="Rachunki"
            color="#800000"
            onPress={() => navigation.navigate("Rachunki")}
          />
        </View>
        <Separator />
        <View>
          <Button
            title="Grafik"
            color="#800000"
            onPress={() => navigation.navigate("Grafik")}
          />
        </View>
        <Separator />
        <View>
          <Button
            title="Czas pracy"
            color="#800000"
            onPress={() => Alert.alert('W trakcie...')}
          />
        </View>
        <Separator />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:150,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});
export default HomeScreen;
import * as React from 'react';
import { render } from 'react-dom';
import { View, Text, Image, Button, SafeAreaView, StyleSheet, ScrollView, Alert, StatusBar } from 'react-native';
import { auth } from '../firebase';
import * as Haptics from 'expo-haptics';


const Separator = () => (
  <View style={styles.separator} />
);



const HomeScreen = ({ navigation }) => {


  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
        <Image
          style={{ width: 300, height: 200, marginLeft: 10, bottom: 100, marginTop: 120 }}
          resizeMode="contain"

          source={require('../icons/logo.png')}
        />
        <View>
          <Button
            title="Menu"
            color="#d94214"
            onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); navigation.navigate("Menu") }}
          />
        </View>
        <Separator />
        <View>

          <Button
            title="Rezerwacje"
            color="#d94214"
            onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); navigation.navigate("Rezerwacje") }}
          />
        </View>
        <Separator />
        <View>

          <Button
            title="Zamówienia"
            color="#d94214"
            onPress={() => {
              navigation.navigate("Zamówienia");
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
            }}
          />
        </View>
        <Separator />

        <View>

          <Button
            title="Rachunki"
            color="#d94214"
            onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); navigation.navigate("Rachunki") }}
          />
        </View>
        <Separator />

        <View>
          <Button
            title="Grafik pracy"
            color="#d94214"
            onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); navigation.navigate("Grafik pracy") }}
          />
        </View>
        <Separator />
        <View>
          <Button
            title="Wyloguj"
            color="#d94214"
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              auth.signOut()
                .then(() => {
                  console.log('Logged out');
                  navigation.navigate("Login", { loggedOut: true })
                })
                .catch(error => {console.log('Logout failed'+error);})
              
            }}

          />
        </View>
        <Separator />
      </SafeAreaView>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
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
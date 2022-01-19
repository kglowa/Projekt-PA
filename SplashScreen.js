import * as React from 'react';
import { View, Text,Image, Button,SafeAreaView, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';


const SplashScreen = ({ navigation }) => {
  

  return (
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
      style={{width:300,height:300,marginLeft:10,bottom:100,marginTop:50}}
      resizeMode = "contain"
      
      source = {require('../icons/logo.png')}
      />
            <SafeAreaView style={styles.container}>

        <View >
          <Button
            title="Start"
            color="#800000"

            onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);navigation.navigate("Login")}}
          />
        </View>
      </SafeAreaView>
    </View>
  );

}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  container: {
      height: 100,
      width:300,
      
      
  }
});
export default SplashScreen;
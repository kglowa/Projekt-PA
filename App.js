import React from 'react';
import { StyleSheet, Button, View, SafeAreaView,Image, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <Image
      style={{width:300,height:300,marginLeft:50,bottom:100}}
      resizeMode = "contain"
      
      source = {require('./icons/logo.png')}
      />
    <View>
      
      <Button
        title="Menu"
        color="#800000"
        onPress={() => Alert.alert('W trakcie...')}
      />
    </View>
    <Separator />
    <View>
    
      <Button
        title="Rezerwacje"
        color="#800000"
        onPress={() => Alert.alert('W trakcie...')}
      />
    </View>
    <Separator />
    <View>
      
      <Button
        title="Zamowienia"
        color="#800000"
        onPress={() => Alert.alert('W trakcie...')}
      />
    </View>
    <Separator />
   
    <View>
      
        <Button
          title="Rachunki"
          color="#800000"
          onPress={() => Alert.alert('W trakcie...')}
        />
        </View>
    <Separator />
    <View>
        <Button
          title="Grafik"
          color="#800000"
          onPress={() => Alert.alert('W trakcie...')}
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
);

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

export default App;
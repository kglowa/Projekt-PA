import * as React from 'react';
import { View, Text, Button } from 'react-native';

const ZamowieniaScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Zamówienia</Text>
        <Button
          title="idz do home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }

  export default ZamowieniaScreen;
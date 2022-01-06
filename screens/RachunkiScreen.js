import * as React from 'react';
import { View, Text, Button } from 'react-native';

const RachunkiScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Rachunki</Text>
        <Button
          title="idz do home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }

  export default RachunkiScreen;
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const PomocScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pomoc Screen</Text>
        <Button
          title="idz do home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }

  export default PomocScreen;
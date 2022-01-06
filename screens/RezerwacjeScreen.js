import * as React from 'react';
import { View, Text, Button } from 'react-native';

const RezerwacjeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Rezerwacje</Text>
        <Button
          title="idz do home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="cofnij"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  export default RezerwacjeScreen;
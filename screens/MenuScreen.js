import * as React from 'react';
import { View, Text, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Menu Screen</Text>
        <Button
          title="idz do detail screen...znow"
          color="#800000"
          onPress={() => navigation.push("pierwsza-detale")}
        />
        <Button
          title="idz do home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="cofnij"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="pierwsza strona"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default MenuScreen;
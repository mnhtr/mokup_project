import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Home</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

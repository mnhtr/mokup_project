import React from 'react';
import {Button, Text, View} from 'react-native';

export default function News({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Main</Text>
      <Button title="Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

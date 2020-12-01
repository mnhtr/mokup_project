import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitleLogin}>Log in</Text>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={[styles.input, {marginTop: 30}]}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.buttonClickLogin}  onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButtonLogin}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  textTitleLogin: {
    fontSize: 40,
    marginTop: 50,
    marginStart: 25,
  },
  input: {
    marginTop: 20,
    height: 55,
    width: '90%',
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
  },
  buttonClickLogin: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 6,
    height: 55,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  textButtonLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import bgLogin from '../assets/bg_login.png';
const win = Dimensions.get('window');
const heightImage = (win.width * 925) / 631;

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Image style={styles.imageStyle} source={bgLogin} />

      <View style={styles.button}>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textLogin}>LOGIN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.textRegister}>RESISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '82%',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  login: {
    flex: 1,
    borderRadius: 10,
    marginEnd: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000000',
  },
  register: {
    flex: 1,
    borderRadius: 10,
    marginStart: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  textRegister: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textLogin: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Main;

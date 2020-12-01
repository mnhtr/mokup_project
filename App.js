import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './component/Main';
import NewsScreen from './component/News';
import SearchScreen from './component/Search';
import TalkScreen from './component/Talk';
import ProfileScreen from './component/Profile';
import Login from './component/Login';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MainStack = createStackNavigator();

const HomeTab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator tabBarOptions={{showIcon: true,
    showLabel: false,
    activeTintColor: '#cd077d',
    inactiveTintColor: '#000',}}>
      <HomeTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <SimpleLineIcons name="home" size={20} color={tabInfo.color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <EvilIcons name="search" size={30} color={tabInfo.color} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Talk"
        component={TalkScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="md-chatbubble-outline"
              size={20}
              color={tabInfo.color}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <AntDesign name="user" size={20} color={tabInfo.color} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={HomeTabScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;

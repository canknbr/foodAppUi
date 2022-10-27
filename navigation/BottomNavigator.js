import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../data/colors';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          elevation: 0,



        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:COLORS.white,
                elevation: 5,
                borderColor: COLORS.primary,
                borderWidth: 2,
                top: -20,
              }}>
              <Icon name="search" size={28} color={COLORS.primary} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../data/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return <Tab.Navigator></Tab.Navigator>
}
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:28}}>Hello,</Text>
            <Text style={{fontSize:28,fontWeight:"bold",marginLeft:10}}>Can</Text>
          </View>
          <Text style={{fontSize:22,marginTop:5,color:COLORS.grey}}>What do you want today?</Text>
        </View>
        <Image 
      </View>
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
export default HomeScreen;

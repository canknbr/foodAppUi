import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../data/colors';
import PrimaryButton from '../components/Button';

const OnBoardScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 400}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -150,
          }}
          source={require('../assets/onboardImage.png')}
        />
      </View>
      <View style={styles.textContent}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <View>
          <PrimaryButton title="Get Started" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  textContent: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
    paddingBottom: 60,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 10,
    width: 30,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});
export default OnBoardScreen;

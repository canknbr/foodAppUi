import React from 'react';
import COLORS from '../data/colors';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={{color: COLORS.white, fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={styles.secondaryButtonContainer}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={{color: COLORS.primary, fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {PrimaryButton, SecondaryButton};

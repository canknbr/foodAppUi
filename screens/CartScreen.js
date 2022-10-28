import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../data/colors';
import {useNavigation} from '@react-navigation/native';
import CartCard from '../components/CartCard';
import foods from '../data/foods';

const CartScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={28}
          color={COLORS.primary}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.primary,
            marginLeft: 10,
          }}>
          Cart
        </Text>
      </View>
      <FlatList
        data={foods}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item}) => <CartCard foods={item} />}
        ListFooterComponent={
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>$ 100</Text>
            </View>
            <View style={styles.checkoutContainer}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
export const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    height: 200,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  checkoutContainer: {
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
export default CartScreen;

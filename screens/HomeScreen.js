import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../data/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListCategories from '../components/ListCategories';
import Card from '../components/Card';
import foods from '../data/foods';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Can
            </Text>
          </View>
          <Text style={{fontSize: 22, marginTop: 5, color: COLORS.grey}}>
            What do you want today?
          </Text>
        </View>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={require('../assets/can.jpg')}
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={24} color={COLORS.primary} />
          <TextInput
            style={{
              fontSize: 18,
              marginLeft: 10,
              flex: 1,
              paddingHorizontal: 10,
            }}
            placeholder="Search for food"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
          />
        </View>
        <View style={styles.filterContainer}>
          <Icon name="tune" size={24} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card foods={item} />}
      />
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
  searchContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  searchBar: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  filterContainer: {
    height: 50,
    backgroundColor: COLORS.primary,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
});
export default HomeScreen;

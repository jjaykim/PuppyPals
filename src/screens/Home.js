import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Header } from '../components/header/Header';
import colors from '../styles/colors';
import adaptiveIco from '../../assets/australia.png';
import { HomeViewerContext } from '../context/HomeViewer';

const { height } = Dimensions.get('window');

export const Home = ({ navigation }) => {
  const demoImages = [adaptiveIco, adaptiveIco, adaptiveIco, adaptiveIco, adaptiveIco];
  const { viewer } = useContext(HomeViewerContext);

  if (!viewer) return null;

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header navigation={navigation} LoginUser={viewer.LoginUser} />

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="ios-search" size={20} color="#212121" style={{ padding: 10 }} />
        <TextInput
          style={{ flex: 1, fontSize: 14 }}
          placeholder="Enter your address"
          placeholderTextColor={colors.lightGray}
        />
      </View>

      {/* Parks */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={demoImages}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.demoImagesBox}
                activeOpacity={0.7}
                onPress={() => navigation.push('DetailScreen')}
              >
                <ImageBackground source={item} style={styles.backgroundImage}>
                  <Text>Parks</Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, idx) => `${item} + ${idx}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 30,
    borderColor: '#F5F5F5',
    borderWidth: 1,
  },
  backgroundImage: {
    height: height * 0.3,
    justifyContent: 'space-between',
  },
  demoImagesBox: {
    marginTop: 20,
  },
});

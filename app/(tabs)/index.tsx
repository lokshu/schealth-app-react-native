import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexScreen: React.FC = () => {
  const navigation = useNavigation();

  const banners = [
    { image: require('../../assets/images/index/banner.jpg'), id: 1, url: '/pages/index/banner_detail' },
    { image: require('../../assets/images/index/banner1.jpg'), id: 2, url: '/pages/index/banner_detail' },
    { image: require('../../assets/images/index/banner.jpg'), id: 3, url: '/pages/index/banner_detail' },
  ];

  const indexProductClass = [
    { image: require('../../assets/images/index/category1.png'), title: '無創身體檢測', id: 1 },
    { image: require('../../assets/images/index/category2.png'), title: '腸胃內視鏡', id: 2 },
    { image: require('../../assets/images/index/category3.png'), title: '基因測試', id: 3 },
    { image: require('../../assets/images/index/category4.png'), title: '體檢服務', id: 4 },
    { image: require('../../assets/images/index/category5.png'), title: '病毒疣處理', id: 5 },
    { image: require('../../assets/images/index/category6.png'), title: '靜脈曲張篩查', id: 6 },
    { image: require('../../assets/images/index/category7.png'), title: '影像掃描', id: 7 },
    { image: require('../../assets/images/index/category8.png'), title: '疫苗接種', id: 8 },
    { image: require('../../assets/images/index/category9.png'), title: '日間手術', id: 9 },
  ];

  const handleProductPress = (item: any) => {
    // Handle navigation to product details
    console.log(`Navigating to ${item.title}`);
    // You can implement navigation to product pages here
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.userName}>您好，小明</Text>
            <Text style={styles.userNumber}>會員編號: 00001</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/message.png')} style={styles.icon} />
            <Image source={require('../../assets/images/cart.png')} style={styles.icon} />
          </View>
        </View>
      </View>

      {/* Banners */}
      <ScrollView horizontal pagingEnabled style={styles.bannerContainer}>
        {banners.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => console.log(`Banner ${item.id} pressed`)}>
            <Image source={item.image} style={styles.bannerImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Categories */}
      <View style={styles.productContainer}>
        {indexProductClass.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleProductPress(item)} style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    padding: 20,
    backgroundColor: '#6D14B3',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userNumber: {
    color: '#ddd',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  bannerContainer: {
    marginVertical: 20,
  },
  bannerImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  productItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default IndexScreen;

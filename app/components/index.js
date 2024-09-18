import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from "../../assets/styles/App.style";
import { Image } from "expo-image";
export const Card = (props) => {
  return (
    <View style={styles.mainIndexContentItemContainer}>
          <Image source={require("../../assets/images/item.png")} style={styles.itemImage}/>
          <View style={styles.mainIndexContentItemRightContainer}>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Barkod Key</Text>
              <Text>{props.barkodkey}</Text>
            </View>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Ürün İsmi</Text>
              <Text>{props.aciklama}</Text>
            </View>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Birim Adı</Text>
              <Text>{props.birimadi}</Text>
            </View>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Fiyat</Text>
              <Text>{props.fiyat1.slice(0,2)} ₺</Text>
            </View>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Stok Kart Türü</Text>
              <Text>{props.stokkartturu}</Text>
            </View>
            <View style={styles.mainIndexContentItemRightBox}>
              <Text style={styles.mainIndexContentItemRightHeader}>Kullanıcı</Text>
              <Text>{props.ekleyenkullaniciadi}</Text>
            </View>
          </View>
        </View>
  );
};
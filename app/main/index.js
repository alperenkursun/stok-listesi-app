import { useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import styles from "../../assets/styles/App.style";
import { Card } from "../components";

export default function UserDetail() {
  const [stokData, setStokData] = useState([]);

  //   const diaadi = "ws";
  //   const diasifre = "123456";
  //   const url = `https://${diafirma}.ws.dia.com.tr/api/v3/sis/json`;

  //   const data = {
  //     login: {
  //       username: diaadi,
  //       password: diasifre,
  //       params: { apikey: "730a4ca4-7a3c-43d1-adf5-7e2fa49295e2" },
  //       disconnect_same_user: "True",
  //     },
  //   };

  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const session_id = json.msg;
  //       const firma_kodu = 1;
  //       const donem_kodu = 1;

  //       const wsAdres = "https://gozdeoptik.ws.dia.com.tr/api/v3/scf/json";

  //       const wsInput = {
  //         scf_stokkart_listele: {
  //           session_id: session_id,
  //           firma_kodu: firma_kodu,
  //           donem_kodu: donem_kodu,
  //           filters: [{ field: "durum", operator: "=", value: "A" }],
  //           sorts: [{ field: "stokkartkodu", sorttype: "ASC" }],
  //           params: {
  //             _key_sis_depo: 0,
  //             _key_sis_depo_filtre: 0,
  //             tarih: "2099-12-31",
  //           },
  //           limit: 10,
  //           offset: 0,
  //         },
  //       };

  //       fetch(wsAdres, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json;charset=UTF-8",
  //         },
  //         body: JSON.stringify(wsInput),
  //       })
  //         .then((response) => response.json())
  //         .then((json) => {
  //           setStokData(json.result);
  //         })
  //         .catch((error) => console.error("Error:", error));
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, []);
  return (
    <View style={styles.mainIndexContainer}>
      <View style={styles.mainIndexStatusContainer}></View>
      <View style={styles.mainIndexTopContainer}>
        <Text style={styles.mainIndexTopText}>Stok-Malzeme Listesi</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.mainIndexContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
        <Card
          aciklama="Tavuk Baget"
          barkodkey="54665465"
          birimadi="Gr"
          fiyat1="15"
          stokkartturu="ABC"
          ekleyenkullaniciadi="alperen"
        />
      </ScrollView>
    </View>
  );
}

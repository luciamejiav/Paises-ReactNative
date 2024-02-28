import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';

export default function HomeDetails({ route }) {
  const { item } = route.params; // Use optional chaining to handle undefined route.params
  if (!item) {
    // Handle the case where item is undefined
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.column}>
      <Image source={{ uri: item.flags.png }} style={styles.image} resizeMode="contain" />
      <View style={[styles.column]}>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 24 }]}>{item.name.common}</Text>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 22, marginBottom: 10 }]}>{item.name.official}</Text>
        <Text style={styles.text}>Capital: {item.capital}</Text>
        <Text style={styles.text}>Continente: {item.continents}</Text>
        <Text style={styles.text}>Población: {item.population} habitantes</Text>
        <Text style={styles.text}>Moneda usada: {item.currencies.EUR.name}  {item.currencies.EUR.symbol}</Text> 
        <Text style={styles.text}>Población: {item.population} habitantes</Text>
        <Text style={styles.text}>GoogleMaps: {item.maps.googleMaps}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 300,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  text: {
    fontSize: 19,
  },
});
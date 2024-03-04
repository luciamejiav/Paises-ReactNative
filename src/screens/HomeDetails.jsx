import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import themeContext from "../theme/themeContext";

export default function HomeDetails({ route }) {

  const theme = useContext(themeContext);
  
  const { item } = route.params; 
  if (!item) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  // bucles para que salga todo lo que tienen dentro 
  const currenciesName = []
  for (const currency in item.currencies) {
    currenciesName.push(`${item.currencies[currency].name} ${item.currencies[currency].symbol}`);
  }

  const languagesName = []
  for (const language in item.languages) {
    languagesName.push(`${item.languages[language]}`);
  }

  //con esto mostramos los datos de la api en la pantalla de details
  return (
    <View style={styles.column}>
      <Image source={{ uri: item.flags.png }} style={styles.image} resizeMode="contain" />
      <View style={[styles.column]}>
        <Text style={[styles.textCommon, {color: theme.color}]}>{item.name.common}</Text>

        <Text style={[styles.textOfficial, {color: theme.color}]}>{item.name.official}</Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Capital: </Text> 
          {item.capital}
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Continente: </Text> 
          {item.continents}
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Población: </Text> 
          {item.population} habitantes
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Moneda usada: </Text> 
          {currenciesName.join('\n')}
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Idiomas: </Text>{languagesName.join()}
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• Área: </Text>
          {item.area} km cuadrados
        </Text>

        <Text style={[styles.text, {color: theme.color}]}>
          <Text style={styles.boldText}>• GoogleMaps: </Text>{'\n'}
          {item.maps.googleMaps}
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL(`${item.maps.googleMaps}`)}>
          <Text style={[styles.text, styles.boldText, styles.ml,{ color: '#3498db'}]}>Ir a la dirección en google maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 300,
    marginLeft: 15
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  text: {
    fontSize: 19,
    marginBottom: 8,
  },
  textCommon: {
    fontWeight: "bold",
    fontSize: 24
  },
  textOfficial: { 
    fontWeight: "bold", 
    fontSize: 22, 
    marginBottom: 10 
  },
  boldText: {
    fontWeight: "bold",
  },
  ml: {
    marginLeft: 12
  }
});
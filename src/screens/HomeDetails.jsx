import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import themeContext from "../theme/themeContext";

//para mostrar los detalles de cada país
export default function HomeDetails({ route }) {

  const theme = useContext(themeContext);
  
  const { item } = route.params; //parámetros de la ruta

  //si no hay datos muestra un mensaje de cargando 
  if (!item) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  // bucles para que salga todo lo que tienen dentro currencies y languages
  const currenciesName = []
  for (const currency in item.currencies) {
    currenciesName.push(`${item.currencies[currency].name} ${item.currencies[currency].symbol}`); //sacamos el nombre de la moneda que se usa en ese país junto al símbolo
  }
  
  const languagesName = []
  for (const language in item.languages) {
    languagesName.push(`${item.languages[language]}`); //sacamos todos los idiomas que se hablan en un país
  }

  //con esto mostramos los datos que queremos de la api en la pantalla de details
  //usamos .join('\n') para concatenar con un salto de linea y .join(', ') para separar por coma y espacio
  //además añadimos un link para ir a google maps a ver la ubicación del país
  return (
    <ScrollView>
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
            {item.continents.join(', ')}
          </Text>

          <Text style={[styles.text, {color: theme.color}]}>
            <Text style={styles.boldText}>• Población: </Text> 
            {item.population} habitantes
          </Text>

          <Text style={[styles.text, {color: theme.color}]}>
            <Text style={styles.boldText}>• Moneda usada: </Text> 
            {currenciesName.join('\n') } 
          </Text>

          <Text style={[styles.text, {color: theme.color}]}>
            <Text style={styles.boldText}>• Idiomas: </Text>{languagesName.join(', ')}
          </Text>

          <Text style={[styles.text, {color: theme.color}]}>
            <Text style={styles.boldText}>• Área: </Text>
            {item.area} km cuadrados
          </Text>

          <Text style={[styles.text, {color: theme.color}]}>
            <Text style={styles.boldText}>• GoogleMaps: </Text>
          </Text>

          <TouchableOpacity onPress={() => Linking.openURL(`${item.maps.googleMaps}`)}>
            <Text style={[styles.text, styles.boldText, styles.ml,{ color: '#3498db'}]}>Ir a la dirección en google maps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getPaisesAll } from '../services/PaisesAPI';
import Card from '../components/Card';
import { useNavigation } from "@react-navigation/native";
import themeContext from "../theme/themeContext";



const HomeScreen = () => {
    const [paises, setPaises] = useState([]);
    const [currentPais, setCurrentPais] = useState(1);
    const [totalPais, setTotalPais] = useState(0);

    const theme = useContext(themeContext);

    const navigation = useNavigation();

    const getPaises = () => {
        getPaisesAll()
        .then(json => {
            setPaises(prevPaises => [...prevPaises, ...json]);
            setTotalPais(json.info.count);
        })
        .catch(err => console.log("error", err));
    };

    useEffect(() => {
        getPaises();
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
          <FlatList
            style={styles.list}
            data={paises}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeDetails', { item: item })}
              >
                <Card key={item.id} item={item} />
              </TouchableOpacity>
            )}
            ListFooterComponent={() => <Text>-- End --</Text>}
            onEndReachedThreshold={0}
            onEndReached={() => {
              if (currentPais < totalPais) {
                getPaises(currentPais + 1);
                setCurrentPais(currentPais + 1);
              }
            }}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      flex: 1,
      width: "100%",
      padding: 10,
      marginTop: 10,
      backgroundColor: '#3498db'
    },
    image: {
      width: 80,
      height: 80
    },
    row: {
      flex: 1,
      flexDirection: "row",
      margin: 10
    },
    column: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    text: {
      fontSize: 18
    }
  });
  
  export default HomeScreen;


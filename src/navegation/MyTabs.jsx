import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {createNativeStackNavigator, DarkTheme} from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import HomeDetails from '../screens/HomeDetails';
import React from "react";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStacks(){
  return(
    <HomeStackNavigator.Navigator initialRouteName='Paises'>
      <HomeStackNavigator.Screen 
        name="Paises"  //titulo arriba
        component={HomeScreen} 
      />
      <HomeStackNavigator.Screen
        name="HomeDetails"
        component={HomeDetails}  //para ir de una pantalla a otra
      />
      <HomeStackNavigator.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          headerBackTitleVisible: false //quita el titulo que aparece al lado de la flecha de volver
        }}
      />
    </HomeStackNavigator.Navigator>
  )
}

//menú de navegación abajo
export default function Navigation() {
      
  //con esto ponemos el icono de abajo que hayamos clicado en verde e iniciamos siempre la app en home
  return (
      <Tab.Navigator
        initialRouteName='HomePais'
        screenOptions={{
          tabBarActiveTintColor: '#3498db', //la ventana en la que estemos sale en azul
          
        }}
      >
        <Tab.Screen
          name="Paises"//llama al método de arriba, lo separamos para que quede más ordenado
          component={MyStacks} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),headerStyle: {
              height: 100, // Ajusta el tamaño de la barra de navegación
              backgroundColor: '#3498db', // Color de fondo de la barra de navegación
            },
            headerShown: true //para que aparezca el header con el nombre
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" size={size} color={color} />
            )
          }} />
      </Tab.Navigator>
  );
}
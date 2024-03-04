import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen';
import Stacks from './Stacks'


const Tab = createBottomTabNavigator();
//menú de navegación abajo
export default function Navigation() {
      
  //con esto ponemos el icono de abajo que hayamos clicado en verde e iniciamos siempre la app en home
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3498db', //la ventana en la que estemos sale en azul
          
        }}
      >
        <Tab.Screen
          name="home"
          component={Stacks} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            headerShown: false //para que aparezca el header con el nombre
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),headerStyle: {
              height: 80, // Ajusta el tamaño de la barra de navegación
              backgroundColor: '#3498db', // Color de fondo de la barra de navegación
            },headerTitleStyle: {
              fontSize: 25, // Tamaño de la fuente del título
            },
            headerShown: true //para que aparezca el header con el nombre
          }} />
      </Tab.Navigator>
  );
}
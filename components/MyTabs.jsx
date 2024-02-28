import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './HomeScreen';
import HomeDetails from './HomeDetails';

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
  return (
    //con esto ponemos el icono de abajo que hayamos clicado en verde e iniciamos siempre la app en home
    <Tab.Navigator
      initialRouteName='HomePais'
      screenOptions={{
        tabBarActiveTintColor: 'green', //la ventana en la que estemos sale en verde
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStacks}
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
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          )
        }} />
    </Tab.Navigator>
  );
}
import React, {useState, useContext} from "react";
import { View, Text, Button, Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../theme/themeContext";


export default function SettingsScreen() {
    const theme = useContext(themeContext)
    const [darkMode, setDarkMode] = useState(false);
  

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.backgroundColor }}>
            <Text style={{color: theme.color}}>Modo Oscuro</Text>
            <Switch 
                value={darkMode} 
                onValueChange={(value) => {
                    setDarkMode(value)
                    EventRegister.emit('ChangeTheme', value)
                    }} />
        </View>
    )
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/home/home";
import Scanner from "./screens/scanner/scanner";
import Dev from "./screens/dev/dev";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        initialRouteName="Home"
        name="Home" 
        component={Home} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Scanner" 
        component={Scanner} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={'black'} size={size} />
          ), 
        }} 
        />
        <Tab.Screen 
        name="Dev" 
        component={Dev} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={'black'} size={size} />
          ),
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// expo install expo-barcode-scanner
// expo install expo-permissions
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs


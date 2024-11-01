import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import HomeScreen from './src/Screens/HomeScreen'
import DrawerContentScreen from './src/Screens/DrawerContentScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomScreen from './src/Screens/WelcomScreen'
import Detail from './src/Screens/Detail'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();

export const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="detail" 
            component={Detail} 
            options={{ headerShown: false }} 
        />
        <Stack.Screen 
            name="welcome" 
            component={WelcomScreen} 
            options={{ headerShown: false }} 
        />
    </Stack.Navigator>
);

// ----------- Tab Navigator ----------- //
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
        })}
    >
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={WelcomScreen} />
    </Tab.Navigator>
);

export const DrawerNavigator = () => (
    <Drawer.Navigator
    screenOptions={{
        drawerPosition: 'right', // Drawer à droite
        headerShown: false,      // Cacher l'en-tête
    }}
    >
    <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ title: 'Accueil' }}
    />
    <Drawer.Screen 
        name="Settings" 
        component={DrawerContentScreen} 
        options={{ title: 'Paramètres', headerShown:true }} 
    />
    </Drawer.Navigator>
);

export const StackNavigator = () => {

    const drawerNavigator = () =>{
        return(
            <Drawer.Navigator
                screenOptions={{
                    drawerPosition: 'right', // Drawer à droite
                    headerShown: false, // Cacher l'en-tête par défaut
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen name="home" component={HomeScreen}/>
            </Drawer.Navigator>
        )
    }

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='home' component={HomeScreen} options={{headerShown:true}} />
            </Stack.Navigator>
        </>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
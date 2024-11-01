import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Création des navigateurs
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// --------- Écrans ---------

const HomeScreen = ({ navigation }) => (
    <View style={styles.center}>
        <Text style={styles.text}>Accueil</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.link}>Aller aux Détails</Text>
        </TouchableOpacity>
    </View>
);

const DetailsScreen = () => (
    <View style={styles.center}>
        <Text style={styles.text}>Détails</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={styles.center}>
        <Text style={styles.text}>Profil</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={styles.center}>
        <Text style={styles.text}>Paramètres</Text>
    </View>
);

// --------- Navigation avec TabNavigator ---------
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Profile') iconName = 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

// --------- Navigation avec StackNavigator ---------
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: true }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
);

// --------- Navigation avec DrawerNavigator ---------
const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={StackNavigator} options={{ title: 'Accueil' }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
);

// --------- Navigation Principale ---------
const App = () => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    link: {
        color: 'blue',
    },
});

export default App;

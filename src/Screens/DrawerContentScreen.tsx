import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerContentScreen = () => {
    return (
        <View>
        <Text>DrawerContentScreen</Text>
        </View>
    )
}

export default DrawerContentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuButton: {
        position: 'absolute',
        top: 40,
        right: 20,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    drawerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    drawerText: {
        fontSize: 18,
    },
})
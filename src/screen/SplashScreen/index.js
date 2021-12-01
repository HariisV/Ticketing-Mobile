import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from "react-native"

const SplashScreen = (props) => {
    useEffect(() => {
        const token = true;
        token ? props.navigation.navigate("AppScreen") : props.navigation.navigate("AuthScreen")
        // setTimeout(() => {
        // }, 0);
    }, [])
    return (
        <View style={styles.container}>
            <Text>SplashScreen Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    }
})

export default SplashScreen;
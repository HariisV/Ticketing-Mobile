import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native"

const register = (props) => {
    const handleChangePage = () => {
        props.navigation.navigate("Login", {
            params: {
                nama: "Haris Ganteng"
            }
        })
    }
    return (
        <View style={styles.container}>
            <Text>Register Page </Text>
            <Button title="Hai, Pindah Halaman Login" onPress={handleChangePage}>
            </Button>
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

export default register
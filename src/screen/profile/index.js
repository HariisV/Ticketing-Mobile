import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native"

const Profiles = (props) => {
    const handleChangePage = () => {
        props.navigation.navigate("Register")
    }
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Profiles Screen</Text>
            <Button title="Hai, Pindah Halaman" onPress={handleChangePage}>
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

export default Profiles
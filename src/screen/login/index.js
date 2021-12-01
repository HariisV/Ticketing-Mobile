import React from 'react'
import { View, StyleSheet, Image, TextInput, ScrollView } from "react-native"
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "react-native-elements"

const Login = (props) => {
    const handleChangePage = () => {
        props.navigation.navigate("Register")
        console.log("HAI")
    }
    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <Image source={require('../../assets/images/logo.png')} width={305} />

                <Text h3 style={styles.h1}>Sign In</Text>
                <Text>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Input Your Email'
                />
                <Text>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Input A Password'
                />

                <View style={{ width: '100%' }}>
                    <Button
                        title="Join for free"
                        buttonStyle={{
                            backgroundColor: '#5F2EEA',
                            height: 70,
                            borderRadius: 15,
                            marginTop: 30

                        }}
                    />
                </View>
                <Text style={styles.alReady}>
                    Do you already have an account ? Log in
                </Text>
            </View >
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "white"
    },
    container: {
        flex: 1,
        margin: 20,
        marginTop: 50,
    },
    h1: {
        marginTop: 60,
        marginBottom: 40
    },
    btn: {
        color: "#5F2EEA",
    },
    alReady: {
        // fontWeight: 600,
        textAlign: "center",
        fontSize: 18,
        marginTop: 16,
        color: "#6E7191"
    },
    input: {
        height: 70,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 20
    }
})

export default Login
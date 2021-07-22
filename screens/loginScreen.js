import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Input from "../components/input";
import Button from "../components/button";
import Colors from "../constants/Colors";
const LoginScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/images/copy-gen-logo-removebg-preview.png')}
        />
        <Text style={styles.welcomeText}>Welcome to CopyGen</Text>
        <Text style={styles.text}>Enter your email address and password </Text>
        <Text style={styles.AccessText}> to access your account</Text>
        <View style={styles.inputContainer}>
            <Input placeholder="Email"/>
            <Input secureTextEntry={true} placeholder="Password"/>
        </View>
        <Button
            style={styles.button}
            onPress={() => navigation.navigate("ConfigurateScreen")}
            title="Login"/>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#fff"
    },
    tinyLogo: {
        width: 70,
        marginLeft: '10%',
        marginTop: '35%',
        marginBottom: '20%',
        height: 100,
    },
    welcomeText: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
        padding: 5,
    },
    text: {
        color: Colors.grayColor,
        marginLeft: 10,
        lineHeight: 21,
        letterSpacing: 0.8
    },
    AccessText: {
        color: Colors.grayColor,
        marginLeft: 45,
        lineHeight: 21,
        letterSpacing: 0.8
    },
    inputContainer: {
        width: '90%',
    },
    button: {
        padding: 15,
        width: '90%',
        backgroundColor: '#0d81ff',
    }
})
export default LoginScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";

const EmployeePrint = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.type}</Text>
            <Text style={styles.text}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: Colors.grayColor,
        fontSize: 15
    }
});
export default EmployeePrint;

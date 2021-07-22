import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";

const Item = props => {
    return (
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.number}>
                    {props.number}
                </Text>
            </View>
            <View style={styles.itemDetailsContainer}>
                <View style={styles.itemPriceContainer}>
                    <Text style={styles.boldedFont}>{props.item}</Text>
                    <Text style={styles.boldedFont}>{props.price}</Text>
                </View>
                <View style={styles.quantityDegreeContainer}>
                    <Text style={styles.grayFont}>Quantity: {props.quantity}</Text>
                    <Text style={styles.grayFont}>{props.degree}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '20%',
        margin: 10,
        flexDirection: 'row',
    },
    numberContainer: {
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#d5eaff',
        height: 18,
        width: '7%',
        marginEnd: '3%'
    },
    number: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.blueColor,
    },
    itemDetailsContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    itemPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boldedFont: {
        fontWeight: 'bold',
        fontSize: 17
    },
    grayFont: {
        color: Colors.grayColor,
        fontSize: 15
    },
    quantityDegreeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Item;

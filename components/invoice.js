import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";

const Invoice = props => {
    return (
        <View style={styles.container}>
            <View style={styles.invoiceTop}>
                <View style={styles.firstLine}>
                    <Text style={styles.invoiceNumber}>Invoice {props.invoiceNumber}  </Text>
                    <Text style={styles.status}>{props.status}</Text>
                </View>
                <Text style={styles.dateTime}>{props.date},{props.time}</Text>
                <View style={styles.detailsContainer}>
                    <Image
                        style={styles.profilePicture}
                        source={require('../assets/images/profilePictur.png')}
                    />
                    <View>
                        <Text style={styles.names}>{props.firstName} {props.secondName}</Text>
                        <Text style={styles.email}>{props.email}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/outline_visibility_black_24dp.png')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '20%',
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 5,
        marginBottom: 10
    },
    firstLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    invoiceTop: {
        margin: 10,
    },
    invoiceNumber: {
        fontWeight: 'bold',
        fontSize: 17
    },
    status: {
        color: Colors.blueColor,
        fontWeight: 'bold'
    },
    dateTime: {
        color: Colors.grayColor,
        marginBottom: 13
    },
    profilePicture: {
        width: 50,
        height: 50,
        marginRight: '5%',
        borderRadius: 25
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: '15%',
        marginLeft: '25%',
        backgroundColor: Colors.bgGreyColor
    },
    names: {
        fontSize: 17
    },
    email: {
        color: Colors.grayColor
    }
})
export default Invoice;

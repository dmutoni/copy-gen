import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Icon} from "react-native-elements";
import Colors from "../constants/Colors";
import Button from "../components/button";

const DeliverAddressScreen = ({navigation}) => {
    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}
                                      style={styles.backContainer}>
                <View style={styles.iconBackContainer}>
                    <Icon
                        style={styles.icon}
                        name="chevron-left"
                        color="#b2b2b2"
                    />
                    <Text style={styles.grayFontColour}>Back</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.titleText}>Delivery Status</Text>
        </View>

        <Image
            style={styles.luggageImage}
            source={require('../assets/images/truck.png')}
        />
        <View style={styles.orderStatus}>
            <Text style={styles.date}>04 December</Text>
            <Icon
                name="circle"
                color="#0d81ff"
            />
            <Text style={styles.process}>Order started</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.orderStatus}>
            <Text style={styles.date}>09 December</Text>
            <Icon
                name="circle"
                color="#0d81ff"
            />
            <Text style={styles.process}>Order started</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.orderStatus}>
            <Text style={styles.date}>12 December</Text>
            <Icon
                name="radio-button-checked"
                color="#0d81ff"
            />
            <Text style={styles.process}>Order started</Text>
        </View>
        <View
            style={styles.horizLineStop}
        />
        <View style={styles.orderStatus}>
            <Text style={styles.date}>24 December</Text>
            <Icon
                name="circle"
                color="#b2b2b2"
            />
            <Text style={styles.grayBg}>Order started</Text>
        </View>
        <Button style={styles.button} onPress={() => navigation.navigate('PreviewScreen')} title="Continue ➡ "/>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 30,
    },
    iconBackContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayFontColour: {
        color: Colors.grayColor
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 6,
        height: 40,
    },
    luggageImage: {
        width: '80%',
        height: '30%',
        margin: 20,
        // padding: 10
    },
    button: {
        padding: 15,
        margin: 10,
        backgroundColor: Colors.blueColor,
    },
    orderStatus: {
        flexDirection: 'row',
        width: '76%',
        justifyContent: 'space-between',
        marginLeft: '12%'
    },
    date: {
        fontWeight: 'bold'
    },
    horizLine: {
        height: '8%',
        borderWidth: 1,
        width: 1,
        marginLeft: '50%',
        borderColor: Colors.blueColor,
    },
    horizLineStop: {
        height: '8%',
        borderWidth: 1,
        width: 1,
        marginLeft: '50%',
        borderColor: Colors.grayColor,
    },
    process: {
        color: Colors.blueColor,
    },
    grayBg: {
        color: Colors.grayColor
    }
})
export default DeliverAddressScreen;

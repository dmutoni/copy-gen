import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Icon} from "react-native-elements";
import Colors from "../constants/Colors";
import Button from "../components/button";
import Barcode from "react-native-barcode-builder";

const OrderStatusScreen = ({navigation}) => {
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
            <Text style={styles.titleText}>Order successful</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.imageSuccessContainer}>
                <Image
                    style={styles.checkImage}
                    source={require('../assets/images/checkImage-removebg-preview.png')}
                />
                <Text style={styles.subTitle}>Payment Successful</Text>
            </View>
            <View style={styles.paymentContainer}>
                <View>
                    <Text style={styles.text}>Order Date: </Text>
                    <Text style={styles.text}>Order Date: </Text>
                    <Text style={styles.text}>Payment: </Text>
                    <Text style={styles.text}>Address: </Text>
                </View>
                <View>
                    <Text style={styles.text}>18 March, 2021 </Text>
                    <Text style={styles.text}>BK38273897298 </Text>
                    <Text style={styles.text}>Visa -5571 </Text>
                    <Text style={styles.text}>8504 Preston Road </Text>
                </View>
            </View>
            <View
                style={styles.horizLine}
            />
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.text}>Subtotal: </Text>
                    <Text style={styles.text}>Service Fee: </Text>
                    <Text style={styles.text}>Delivery Fee: </Text>
                </View>
                <View>
                    <Text style={styles.text}>$1539 </Text>
                    <Text style={styles.text}>$4 </Text>
                    <Text style={styles.text}>$25 </Text>
                </View>
            </View>
            <View
                style={styles.horizLine}
            />
            <View style={styles.totalContainer}>
                <View>
                    <Text style={styles.textBold}>Total: </Text>
                </View>
                <View>
                    <Text style={styles.textBold}>$1568 </Text>
                </View>
            </View>
            <View style={{ transform: [{ scale: 0.9 }], width: '30%' }}>
                <Text>
                    <Barcode value="Hello World" height={60} format="CODE128"/>;
                </Text>
            </View>

        </View>
        <View style={styles.buttonContainer}>
            <Button style={styles.purpleButton} title="Save"/>
            <Button style={styles.primaryButton} title="Continue ➡ "/>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    headerContainer: {
        height: '13%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        color: Colors.grayColor,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 6,
        height: 40,
    },
    body: {
        borderStyle: 'dashed',
        borderRadius: 2,
        width: '85%',
        marginVertical: '7%',
        marginHorizontal: '8%',
        borderTopWidth: 1,
        height: '75%',
        backgroundColor: '#fff',
        borderColor: Colors.grayColor,
    },
    horizLine: {
        borderBottomColor: Colors.grayColor,
        borderBottomWidth: 0.5,
        margin: 10,
    },
    imageSuccessContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkImage: {
        width: '27%',
        height: '40%',
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
    },
    paymentContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBold: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
    },
    text: {
        color: Colors.grayColor,
        fontSize: 15,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    purpleButton: {
        backgroundColor: '#8a80fe',
        width: '48%',
        height: 40
    },
    primaryButton: {
        backgroundColor: Colors.blueColor,
        width: '48%'
    },
    barcode: {
        width: '30%',
        height: '30%'
    }
})
export default OrderStatusScreen;

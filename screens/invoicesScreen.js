import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../constants/Colors";
import Invoice from "../components/invoice";
import Button from "../components/button";
import {Icon} from "react-native-elements";

const InvoiceScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
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
                <Text style={styles.titleText}>Invoices</Text>
            </View>
            <View style={styles.invoiceTopScreen}>
                <View style={styles.invoiceScreen}>
                    <Invoice
                        invoiceNumber="#20025"
                        date="14.02.2021"
                        status=". Active"
                        time="14:52"
                        firstName="David"
                        secondName="Rozaiski"
                        email="manda@gmail.com"
                    />
                    <Invoice
                        invoiceNumber="#32412"
                        date="14.02.2021"
                        status=". Active"
                        time="14:52"
                        firstName="Patrick"
                        secondName="Niyo"
                        email="niyo@gmail.com"
                    />
                    <Invoice
                        invoiceNumber="#32412"
                        date="14.02.2021"
                        status=". Active"
                        time="14:52"
                        firstName="Bruce"
                        secondName="Knowbee"
                        email="bruce@gmail.com"
                    />
                    <Invoice
                        invoiceNumber="#32412"
                        date="14.02.2021"
                        status=". Active"
                        time="14:52"
                        firstName="Mutoni"
                        secondName="Denyse"
                        email="mutoni@gmail.com"
                    />
                    <Button style={styles.button} title="Continue ➡ "
                            onPress={() => navigation.navigate("DeliverAddressScreen")}/>
                </View>
            </View>
        </View>
    )
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
        backgroundColor: '#fff'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 50,
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
    invoiceTopScreen: {
        flex: 1,
        backgroundColor: Colors.bgGreyColor
    },
    invoiceScreen: {
        flex: 1,
        margin: 14,
    },
    invoiceTitle: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        padding: 15,
        marginTop: 10,
        backgroundColor: Colors.blueColor,
    },
})
export default InvoiceScreen;

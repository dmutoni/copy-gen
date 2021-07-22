import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../constants/Colors";
import Button from "../components/button";
import Item from "../components/Item";
import {Icon} from "react-native-elements";
// import {Icon} from 'react-native-elements';

const CreateInvoiceScreen = ({navigation}) => {
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
                <Text style={styles.titleText1}>Create Invoice</Text>
            </View>
            <View style={styles.invoiceTopScreen}>
                <View style={styles.invoiceScreen}>
                    <View style={styles.headerView}>
                        <ImageBackground source={require('../assets/images/pinkGreen.png')} imageStyle={styles.backgroundImage}
                                         resizeMode="cover"
                                         style={styles.backgroundImage}>
                            <View style={styles.invoiceIconView}>
                                <Image
                                    style={styles.documentLogo}
                                    source={require('../assets/images/outline_adjust_white_24dp.png')}
                                />
                                <View style={styles.invoiceView}>
                                    <Text style={[styles.title, styles.invoiceText]}>Invoice 1963</Text>
                                    <View style={styles.nameDateView}>
                                        <Text style={[styles.title]}>Jacob Jones, </Text>
                                        <Text style={styles.title}>12 May 2021</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.itemsContainer}>
                        <Text style={styles.titleText}>ITEMS</Text>
                        <Item number="01" item="Business Cards" price="$800" quantity="150" degree="D1"/>
                        <View
                            style={styles.horizLine}
                        />
                        <Item number="02" item="Catalogs" price="$460" quantity="50" degree="D2"/>
                        <View
                            style={styles.horizLine}
                        />
                        <Item number="03" item="Printed envelopes" price="$250" quantity="100" degree="D3"/>
                    </View>
                    <View style={styles.deliveryAttachmentContainer}>
                        <View style={styles.deliveryEditContainer}>
                            <Text style={styles.titleText}>DELIVERY</Text>
                            <View style={styles.editContainer}>
                                <Text style={styles.editText}>EDIT</Text>
                                <Image
                                    style={styles.editIcon}
                                    source={require('../assets/images/edit-icon-removebg-preview.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.nameLocationContainer}>
                            <Text style={styles.deliveryName}>Jacob Jones</Text>
                            <View style={styles.locationContainer}>
                                <Image
                                    style={styles.locationPic}
                                    source={require('../assets/images/baseline_location_on_black_24dp.png')}
                                />
                                <Text>42 Ranchview Dr. Richardson, CA 62639</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.deliveryAttachmentContainer}>
                        <View style={styles.deliveryEditContainer}>
                            <Text style={styles.titleText}>ATTACHMENTS</Text>
                            <Text style={styles.dotsText}>...</Text>
                        </View>
                        <View style={styles.nameLocationContainer}>
                            <View style={styles.locationContainer}>
                                <View style={styles.componentContainer}>
                                    <Image
                                        style={styles.greenDocument}
                                        source={require('../assets/images/green-document-icon.png')}
                                    />
                                    <Text>Components cost list</Text>
                                </View>
                                <Text style={styles.openText}>Open</Text>
                            </View>
                        </View>
                    </View>
                    <Button style={styles.button} onPress={() => navigation.navigate('InvoiceScreen')} title="Next step ➡ "/>
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
    },
    titleText1: {
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
    configurateTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        marginBottom: '8%',
    },
    headerView: {
        borderWidth: 0,
        borderRadius: 10,
        height: '9%',
    },
    invoiceView: {
        flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    invoiceIconView: {
        flexDirection: 'row'
    },
    nameDateView: {
        flexDirection: 'row',
    },
    invoiceText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        color: '#fff'
    },
    documentLogo: {
        marginHorizontal: '5%'
    },
    itemsContainer: {
        backgroundColor: '#fff',
        marginVertical: '5%',
        width: '100%',
        height: '40%',
        borderRadius: 7
    },
    titleText: {
        color: Colors.grayColor,
        marginVertical: '3%',
        marginLeft: 10,
        fontSize: 13
    },
    horizLine: {
        borderBottomColor: Colors.grayColor,
        borderBottomWidth: 0.5,
        marginHorizontal: 10
    },
    deliveryAttachmentContainer: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        height: '15%',
        marginBottom: 10,
        borderRadius: 6
    },
    deliveryEditContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    editText: {
        color: Colors.blueColor,
        marginLeft: 0
    },
    editIcon: {
        // marginTop: 4,
        width: '15%',
        height: '70%'
    },
    locationContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 5
    },
    nameLocationContainer: {
        marginHorizontal: 10,
    },
    deliveryName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    componentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 15,
        backgroundColor: Colors.blueColor,
    },
    openText: {
        marginLeft: '35%',
        color: Colors.blueColor,
    },
    dotsText: {
        marginEnd: 15,
        fontSize: 20
    },
    greenDocument: {
        width: '10%',
        height: '100%'
    }
})

export default CreateInvoiceScreen;


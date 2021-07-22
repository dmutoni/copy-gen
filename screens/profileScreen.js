import React from 'react';
import {Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../constants/Colors";
import {Icon} from 'react-native-elements';
import Button from "../components/button";

const ProfileScreen = ({navigation}) => {
    return <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}
                                      style={styles.backContainer}>
                <View style={styles.iconBackContainer}>
                    <Icon
                        style={styles.iconHeader}
                        name="chevron-left"
                        color="#b2b2b2"
                    />
                    <Text style={styles.grayFontColour}>Back</Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={styles.titleText}>Profile</Text>
        </View>
        <View style={styles.detailsContainer}>
            <Image
                style={styles.profilePicture}
                source={require('../assets/images/profilePictur.png')}
            />
            <View>
                <Text style={styles.names}>Robert Williams</Text>
                <Text style={styles.email}>robert.williams@copygen.com</Text>
            </View>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.checkCircle]}
                name="check-circle"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Active orders</Text>
            <Text style={styles.number}>34</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.folderIcon]}
                name="folder"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Projects</Text>
            <Text style={styles.numberProjects}>224</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.descriptionIcon]}
                name="description"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Invoices</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.clientIcon]}
                name="account-circle"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Clients</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.grayIcon]}
                name="alarm-on"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Stats</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.grayIcon]}
                name="settings"
                color="#fff"
            />
            <Text style={styles.activeOrders}>Settings</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <View style={styles.profileContainer}>
            <Icon
                style={[styles.icon, styles.grayIcon]}
                name="lightbulb"
                color="#fff"
            />
            <Text style={styles.activeOrders}>FAQ</Text>
        </View>
        <View
            style={styles.horizLine}
        />
        <Pressable style={styles.unFilledButton}>
            <Text style={styles.text}>Add an order</Text>
        </Pressable>
        <Button style={styles.button} title="Create invoice ➡ " onPress={() => navigation.navigate('CreateInvoiceScreen')}/>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
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
    iconHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 6,
        height: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    detailsContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    profilePicture: {
        width: 50,
        height: 50,
        marginRight: '5%',
        borderRadius: 25
    },
    names: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    email: {
        color: Colors.grayColor
    },
    horizLine: {
        borderBottomColor: Colors.grayColor,
        borderBottomWidth: 0.5,
        marginVertical: 10
    },
    checkCircle: {
        backgroundColor: Colors.blueColor,
        width: 40,
        borderRadius: 6,
        height: 40,
        marginEnd: 10,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderRadius: 6,
        height: 40,
        marginEnd: 10,
    },
    folderIcon: {
        backgroundColor: '#a34afc',
    },
    descriptionIcon: {
        backgroundColor: '#f84c57',
    },
    clientIcon: {
        backgroundColor: '#fd9548'
    },
    grayIcon: {
        backgroundColor: '#999fbd'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    activeOrders: {
        fontSize: 18,
        marginRight: '48%'
    },
    number: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.blueColor,
    },
    numberProjects: {
        fontWeight: 'bold',
        marginLeft: '8%',
        fontSize: 20,
        color: '#a34afc',
    },
    unFilledButton: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.blueColor,
        marginTop: 20,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: Colors.blueColor,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.blueColor,
    },
})
export default ProfileScreen;

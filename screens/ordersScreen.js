import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from "../constants/Colors";
import {Icon, SearchBar} from "react-native-elements";
import Button from "../components/button";

const OrdersScreen = () => {
    const [search, setSearch] = useState('');
    const searchHandler = () => {
        setSearch(search)
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.backContainer}>
                    <Icon
                        style={styles.icon}
                        name="chevron-left"
                        color="#b2b2b2"
                    />
                    <Text style={styles.grayFontColour}>Back</Text>
                </View>
                <Text style={styles.title}>Clients</Text>
                <View style={styles.starContainer}>
                    <Text style={styles.numberIcons}>285</Text>
                    <Icon
                        style={styles.icon}
                        name="star"
                        color="#fe9500"
                    />
                </View>
            </View>
            <SearchBar
                placeholder="Search..."
                onChangeText={setSearch}
                lightTheme
                value={search}
            />
            <View style={styles.partners}>
                <Pressable style={[styles.activeButton, styles.partnerButton]}>
                    <Text style={styles.activeText}>Recent</Text>
                </Pressable>
                <Pressable style={styles.partnerButton}>
                    <Text style={styles.text}>In order</Text>
                </Pressable>
                <Pressable style={styles.partnerButton}>
                    <Text style={styles.text}>Partners</Text>
                </Pressable>
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
            <View style={styles.buttonContainer}>
                <Button style={styles.purpleButton} title="Manage"/>
                <Button style={styles.primaryButton} title="Add client + "/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    headerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backContainer: {
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
    starIcon: {
        backgroundColor: '#fe9500'
    },
    numberIcons: {
        color: '#fe9500'
    },
    starContainer: {
        backgroundColor: '#fff5e7',
        height: 30,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 15,
        marginTop: 30,
        backgroundColor: Colors.blueColor,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black',
        color: '#424242',
    },
    partners: {
        width: '100%',
        marginVertical: 15,
        flexDirection: 'row'
    },
    partnerButton: {
        width: '33%',
        borderRadius: 4,
        alignItems: 'center',
        padding: 7,
        borderColor: Colors.grayColor,
        borderWidth: 0.5
    },
    activeButton: {
        backgroundColor: Colors.blueColor,
    },
    text: {
        color: '#000'
    },
    activeText: {
        color: '#ffff'
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    purpleButton: {
        backgroundColor: '#8a80fe',
        width: '48%',
        height: 40
    },
    primaryButton: {
        backgroundColor: Colors.blueColor,
        width: '48%'
    }
})
export default OrdersScreen;

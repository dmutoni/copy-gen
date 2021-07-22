import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../constants/Colors";
import EmployeePrint from "../components/employeePrint";
import Button from "../components/button";
import {Icon} from "react-native-elements";

const PreviewScreen = ({navigation}) => {
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
                <Text style={styles.titleText}>3D Preview</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.envelope}
                        source={require('../assets/images/png-clipart-paper-art-open-envelope-blue-material-removebg-preview.png')}
                    />
                </View>
                <Text style={styles.subTitle}>Envelop Print</Text>
                <EmployeePrint type="Envelop Type: " description="Standard A4"/>
                <View
                    style={styles.horizLine}
                />
                <EmployeePrint type="Envelop Size: " description="8.3 inches by 11.7 inches"/>
                <View
                    style={styles.horizLine}
                />
                <EmployeePrint type="Paper texture: " description="Smooth texture"/>
                <View
                    style={styles.horizLine}
                />
                <Button style={styles.button} title="Customize ➡ " onPress={() => navigation.navigate('ClientScreen')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25
    },
    body: {
        margin: 10
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 20
    },
    horizLine: {
        borderBottomColor: Colors.grayColor,
        borderBottomWidth: 0.5,
        marginVertical: 10
    },
    imageContainer: {
        alignItems: 'center',
    },
    button: {
        padding: 15,
        marginTop: 30,
        backgroundColor: Colors.blueColor,
    },
})
export default PreviewScreen;

import React, {useState} from 'react';
import {
    Image,
    ImageBackground,
    Picker,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import Input from "../components/input";
import Colors from "../constants/Colors";
import Button from "../components/button";
import {Icon} from "react-native-elements";

const ConfigurateScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("Binding");
    const [changeBackground, setChangeBackground] = useState('false');
    const [changeCopiesBackground, setCopiesBackground] = useState('false');
    const changeBackgroundHandler = () => {
        console.log('value', changeBackground);
        setChangeBackground(!changeBackground)
        setCopiesBackground(changeBackground)
    }
    const copiesBackgroundHandler = () => {
        console.log('value', changeBackground);
        setChangeBackground(changeBackground)
        setCopiesBackground(!changeBackground)
    }
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
                <Text style={styles.titleText}>Configurate</Text>
            </View>
            <View style={styles.headerView}>
                <ImageBackground source={require('../assets/images/blueGradient.png')} imageStyle={styles.backgroundImage}
                                 resizeMode="cover"
                                 style={styles.backgroundImage}>
                    <Image
                        style={styles.documentLogo}
                        source={require('../assets/images/outline_description_white_24dp.png')}
                    />
                    <Text style={styles.title}>A4 Document Template</Text>
                    {/*<Icon name='description' color='black'  />*/}
                </ImageBackground>
            </View>
            <Input placeholder="Order name"/>
            <Input placeholder="Serial number"/>
            <View style={styles.pickerContainer}>
                <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    // style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Binding" value="binding"/>
                    <Picker.Item label="Binding1" value="binding1"/>
                </Picker>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    mode='dropdown'
                    selectedValue={selectedValue}
                    // style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Regular plan" value="regular plan"/>
                    <Picker.Item label="Regular plan 1" value="regular plan 1"/>
                </Picker>
            </View>
            <Text style={styles.normalText}>SORTING</Text>
            <View style={styles.sortingTypeContainer}>
                <TouchableOpacity
                    style={[styles.divContainer, styles.setContainer, changeBackground ? '' : styles.blueBorder]}
                    onPress={changeBackgroundHandler}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/images/filesIcon.png')}
                    />
                    <Text>Sets</Text>
                </TouchableOpacity>
                <View style={[styles.divContainer, changeCopiesBackground ? styles.copiesContainer : styles.blueBorder]}
                      onPress={copiesBackgroundHandler}>
                    <Image
                        style={styles.secondLogo}
                        source={require('../assets/images/transparent-file-removebg-preview.png')}
                    />
                    <Text>Copies</Text>
                </View>
            </View>
            <Text style={styles.normalText}>ATTACHMENTS</Text>
            <View style={styles.filePickerContainer}>
                <Image
                    style={styles.folderOpenLogo}
                    source={require('../assets/images/blue-open-folder-dropbox-removebg-preview.png')}
                />
                <Text style={styles.browseFilesText}>Browse your files</Text>
            </View>
            <Button style={styles.button} title="Continue ➡ " onPress={() => navigation.navigate('ProfileScreen')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10
    },
    headerContainer: {
        height: '13%',
        flexDirection: 'row',
        alignItems: 'center',
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
    backgroundImage: {
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    normalText: {
        color: Colors.grayColor,
    },
    documentLogo: {
        marginLeft: '10%'
    },
    tinyLogo: {
        width: 30,
        marginTop: '10%',
        marginHorizontal: '10%',
        height: 60,
    },
    secondLogo: {
        width: 27,
        marginHorizontal: '10%',
        height: 33,
    },
    title: {
        color: '#fff',
        // fontWeight: 'semi-bold',
        fontSize: 18
    },
    pickerContainer: {
        borderRadius: 5,
        borderWidth: 0,
        height: 45,
        padding: 0,
        width: '100%',
        backgroundColor: Colors.inputColor,
        marginVertical: '3%'
    },
    sortingTypeContainer: {
        flexDirection: 'row',
    },
    divContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.grayColor,
        width: '48%',
        height: 65,
        borderRadius: 5,
        marginVertical: '5%'
    },
    setContainer: {
        marginEnd: '4%',
    },
    blueBorder: {
        borderColor: Colors.blueColor,
        backgroundColor: '#f5f8ff'
    },
    copiesContainer: {
        borderRadius: 5
    },
    filePickerContainer: {
        borderStyle: 'dashed',
        borderRadius: 6,
        width: '100%',
        marginVertical: '7%',
        borderWidth: 1,
        height: '15%',
        borderColor: Colors.grayColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        padding: 15,
        backgroundColor: Colors.blueColor,
    },
    browseFilesText: {
        color: Colors.blueColor
    },
    folderOpenLogo: {
        width: '15%',
        height: '30%',
        marginRight: '5%'
    }
})

export default ConfigurateScreen;


import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchBox = () => {
    return(
        <View style={styles.container}>
           <View style={styles.inputWrapper}>
              <Icon name="search" color="#a3a3a3" />
              <TextInput placeholder="Search" style={styles.input} />
           </View>
           <TouchableOpacity>
              <Icon name="mic" color="grey" />
           </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor:'#D8D8D877',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius: 5

    },
    inputWrapper: {
        width: '90%',
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        color: '#a3a3a3'
    }
})

export default SearchBox;

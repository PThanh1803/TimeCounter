/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

function Movie(): React.JSX.Element {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Image source={require('./img/arrow-back.png')} style={{ width: 20, height: 20, resizeMode: 'contain'}} />
                    <Text style={{ fontSize: 18 , color: 'white'}}>Home</Text>
                </View>
                <Text style={{ fontSize: 18 , color: 'white'}}>Movie Explorer</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.box}>
                    <Image source={require('./img/gragon.png')} style={{ width: 150, height: 350     }} />
                    <Text>Meta: 44</Text>
                    <Text>imDB: 7.5</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.movieTile}> Batman v Superman: Drawn of Justice (2016) </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        height:'8%',
        width:'100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    body:{
        padding: 10,
        height:'92%',
        width:'100%',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    box: {
        backgroundColor: 'white',
        width: 160,
        height: 100,
    },
    movieTile: {
        marginTop: 20,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        width: 250,
    },

});

export default Movie;


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
                <Text style={{ fontSize: 20 , color: 'white'}}>Movie Explorer</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman Begin 2005</Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
                </View>

                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman v Superman: Drawn of Justice (2016) </Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
                </View>

                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman Begin 2005</Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
                </View>

                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman Begin 2005</Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
                </View>

                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman Begin 2005</Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
                </View>

                <View style={styles.box} >
                    <Image source={require('./img/gragon.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                    <Text style={styles.movieTile}> Batman Begin 2005</Text>
                    <Image source={require('./img/arrow-next.png')} style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', right: 0, top: 30 }} />
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
    },

    body:{
        padding: 10,
        height:'92%',
        width:'100%',
        backgroundColor: 'lightgrey',
    },

    box: {
        marginTop: 10,
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    movieTile: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        width: 250,
    },

});

export default Movie;


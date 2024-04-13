/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import StockButton, { StockData } from './stockButton.tsx';
import { getStockInfo } from './api';

const stockList = [
    { stockName: 'VIN GROUP', stockCode: 'VFS' },
    { stockName: 'FLC', stockCode: 'FLC' },
    { stockName: 'VIETJET', stockCode: 'VJC' },
    { stockName: 'MASSAN', stockCode: 'MSN' },
    { stockName: 'VINAMILK', stockCode: 'VNM' },
    { stockName: 'SRC', stockCode: 'SRC' },
    { stockName: 'HSBC', stockCode: 'HSBC' },
    { stockName: 'SAM HOLDING', stockCode: 'SAM' },
    { stockName: 'PETROLIMEX', stockCode: 'PET' },
];


function Stock(): React.JSX.Element {
    const [stockName, setStockName] = useState(stockList[0].stockName);
    const [stockCode, setStockCode] = useState(stockList[0].stockCode);
    const [changePercent, setChangePercent] = useState('8.700 (-1.5387%)');
    const [status, setStatus] = useState(false);


    const handlePress = (stock: StockData) => {
        setStockName(stock.stockName);
        setStockCode(stock.stockCode);
        setStatus(true);
        console.log(status);
        // eslint-disable-next-line @typescript-eslint/no-shadow
        getStockInfo(stock.stockCode).then(changePercent => {
            setChangePercent(changePercent);
            setStatus(false);
        });
    };

    useEffect(() => {
        Alert.alert('Hello');
        // eslint-disable-next-line @typescript-eslint/no-shadow
        getStockInfo('IBM').then(changePercent => {
            setChangePercent(changePercent);
            setStatus(false);
        });
    }, []);
    return (
        <View style={styles.cointainer}>
            <View style={styles.header}>
                <View style={styles.textWrapper}>
                    <Text style={{ fontSize: 40, color: 'black' }}>
                        {stockName}
                    </Text>
                    <Text style={{ fontSize: 75, color: 'black', fontWeight: 'bold' }}>{stockCode} </Text>
                    <Text style={{ fontSize: 40, color: 'red' }}>{changePercent}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.buttonWrapper}>
                    {/* <TouchableHighlight style={styles.button} underlayColor="lightblue" onPress={() => Alert.alert('Hello')} >
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight >

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor="lightblue">
                        <Text>{stockList[0].stockName}</Text>
                    </TouchableHighlight> */}

                    <StockButton stock={stockList[0]} pressButton={handlePress} />
                    <StockButton stock={stockList[1]} pressButton={handlePress} />
                    <StockButton stock={stockList[2]} pressButton={handlePress} />
                    <StockButton stock={stockList[3]} pressButton={handlePress} />
                    <StockButton stock={stockList[4]} pressButton={handlePress} />
                    <StockButton stock={stockList[5]} pressButton={handlePress} />
                    <StockButton stock={stockList[6]} pressButton={handlePress} />
                    <StockButton stock={stockList[7]} pressButton={handlePress} />
                    <StockButton stock={stockList[8]} pressButton={handlePress} />
                </View>
            </View>
            {status && (
                <View style={{ backgroundColor: 'transparent',position: 'absolute' ,width: '100%', height: '100%',justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" animating={status} color="blue" style={styles.loadingIndicator} />
                </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
    },

    header: {
        backgroundColor: 'yellow',
        flex: 1,
    },

    footer: {
        flex: 1,
        backgroundColor: 'lightpink',
    },

    textWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonWrapper: {
        flexWrap: 'wrap',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    button: {
        borderWidth: 2,
        height: 60,
        width: (Dimensions.get('window').width - 60) / 3,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        marginBottom: 15,
    },

    loadingIndicator: {
        position: 'absolute',
        alignSelf: 'center',
        top: 0,
        bottom: 0,
    },

});

export default Stock;

/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {

    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,

} from 'react-native';

export type StockData = {
    stockName: string;
    stockCode: string;
};

type StockProps = {
    stock: StockData;
    pressButton: Function;
};

function StockButton({ stock, pressButton }: StockProps): React.JSX.Element {
    const handlePress = () => {
        pressButton(stock);
    };
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text> {stock.stockName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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


});

export default StockButton;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {

  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [bmi, setBmi] = React.useState('');
  const [bmiStatus, setBmiStatus] = React.useState('');
  // let weight = '0'
  // let height = '0'
  const onCalculate = () => {
    const weightVal = parseInt(weight, 10);
    let heightVal = parseInt(height, 10);
    // eslint-disable-next-line eqeqeq
    if (weightVal == 0 || heightVal == 0) {
      Alert.alert('Error', 'Please enter weight and height');
      return;
    }
    const result = (weightVal / ((heightVal / 100) * (heightVal / 100))).toFixed(2);
    setBmi(result.toString());
    if (parseFloat(result) < 18.5) {
      setBmiStatus('Underweight');
    } else if (parseFloat(result) >= 18.5 && parseFloat(result) <= 24.9) {
      setBmiStatus('Normal');
    } else if (parseFloat(result) >= 25 && parseFloat(result) <= 29.9) {
      setBmiStatus('Overweight');
    } else if (parseFloat(result) >= 30) {
      setBmiStatus('Obese');
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.outer}>
          <View style={styles.inner}>
            <Text style={{ fontSize: 25 }}> Weight (KG)</Text>
            <TextInput style={styles.inputbox} placeholder="0"
              keyboardType="numeric"
              value={weight.toString()}
              onChangeText={(text) => { setWeight(text);}} />
          </View>

          <View style={styles.inner}>
            <Text style={{ fontSize: 25 }}> Height (CM)</Text>
            <TextInput style={styles.inputbox} placeholder="0"
              keyboardType="numeric"
              value={height.toString()}
              onChangeText={(text) => { setHeight(text);}} />
          </View>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 25 }} >BMI: {bmi}</Text>
          </View>

          <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 25 }} >BMI Status : {bmiStatus}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => onCalculate()}>
            <Text style={{ fontSize: 25 }}>Compute</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inner: {
    marginTop: 20,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center',
    height: 90,
    backgroundColor: 'lightblue',
    borderBlockColor: 'black',
    borderWidth: 1,
  },

  outer: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
  },

  inputbox: {
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 25,
    color: 'black',
  },

});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  return (

    <ScrollView horizontal={true} pagingEnabled={true} >
      <View style={[styles.outer, { width: Dimensions.get('window').width }]}>
        <View style={styles.inner}>
          <Image source={require('./img/menu.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          <Image source={require('./img/person.png')} style={{ width: 40, height: 50, resizeMode: 'contain' }} />
        </View>

        <View style={[styles.inner, { flexDirection: 'column' }]}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Hey Alex,</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Find a course you want to learn</Text>
        </View>

        <View style={[styles.inner, { backgroundColor: 'lightgray', borderRadius: 28, padding: 8 }]}>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./img/search.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
          </View>
          <TextInput placeholder="Search for anything" style={{ flex: 1, marginLeft: 10, fontSize: 15 }} />
        </View>

        <View style={styles.inner}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Categories</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>See All</Text>
        </View>

        <View style={{ height: 480, paddingBottom: 20 }} >
          <ScrollView horizontal={false}>
            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.box, { backgroundColor: '#B9CB9F' }]} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>UX Design</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>25 Courses</Text>
                <ImageBackground source={require('./img/gragon.png')} style={{ flex: 1 }} />
              </View>

              <View style={[styles.box, { backgroundColor: '#D9ABAC' }]} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Marketing</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>20 Courses</Text>
                <ImageBackground source={require('./img/gragon.png')} style={{ flex: 1 }} />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={[styles.box, { backgroundColor: '#CAABD9' }]} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Photography</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>10 Courses</Text>
                <ImageBackground source={require('./img/gragon.png')} style={{ flex: 1 }} />
              </View>

              <View style={[styles.box, { backgroundColor: '#ABCED9' }]} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Business Photography</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>7 Courses</Text>
                <ImageBackground source={require('./img/gragon.png')} style={{ flex: 1 }} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={[styles.outer, { backgroundColor: '#E9E7CE', width: Dimensions.get('window').width }]}>
        <View style={styles.inner}>
          <Image source={require('./img/arrow-back.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
          <Image source={require('./img/dots-three.png')} style={{ width: 12, height: 25, resizeMode: 'contain' }} />
        </View>

        <View style={{ margin: 10, backgroundColor: '#E9E7CE', height: 300, borderRadius: 35 }}>
          <ImageBackground source={require('./img/gragon.png')} style={{ width: '100%', height: 300, opacity: 1 }} >
            <View style={{ backgroundColor: '#FFC700', padding: 10, borderRadius: 20, width: '40%' }} >
              <Text style={{ fontSize: 20, color: 'black' }}>BESTSELLER</Text>
            </View>

            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black' }}>Design Thinking</Text>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Image source={require('./img/people.png')} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 10 }} />
              <Text style={{ fontSize: 18, color: 'black', marginRight: 10 }}>55k </Text>
              <Image source={require('./img/star.png')} style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 10 }} />
              <Text style={{ fontSize: 18, color: 'black' }}>4.1k</Text>
            </View>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'black', marginTop: 15 }}>50$</Text>
          </ImageBackground>

        </View>

        <View style={{ backgroundColor: 'white', paddingBottom: 10, paddingTop: 20, borderRadius: 35 }}>
          <View style={[styles.inner, { flexDirection: 'column' }]}>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Courses Content</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold' }}>01</Text>
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>5:35 mins</Text>
                <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Wellcome to the Course</Text>
              </View>
              <Image source={require('./img/play.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold' }}>02</Text>
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>7:35 mins</Text>
                <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Design Thinking - Intro</Text>
              </View>
              <Image source={require('./img/play.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 40, fontWeight: 'bold' }}>03</Text>
              <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>10:35 mins</Text>
                <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Design Thinking Process</Text>
              </View>
              <Image source={require('./img/play.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            </View>
          </View>

          <View style={[styles.inner, { marginTop: 30, padding: 8 }]}>
            <View style={{ height: 60, width: 80, backgroundColor: '#C8889C', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
              <Image source={require('./img/shoping.png')} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' }} />
            </View>
            <View style={{ height: 60, width: 260, backgroundColor: '#556AB9', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Buy now</Text>
            </View>
          </View>
        </View>




      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  outer: {
    //justifyContent: 'space-between',
  },
  box: {
    margin: 10,
    paddingTop: 20,
    paddingLeft: 20,
    width: 170,
    height: 260,
    borderRadius: 20,
  },
});

export default App;

/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieImage from '../../images/lottieImage.json';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native Animations!</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('layoutAnimation')
                }}>
                    <Text style={[styles.buttonText,styles.welcome]}>Navigate to Layout Animation</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('welcomeLottie')
                }}>
                    <Text style={[styles.buttonText, styles.welcome]}>Navigate to Lottie Animation</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttonText:{
        borderRadius: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    lottieStyle: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

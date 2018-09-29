/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieImage from '../../../images/lottieImage.json';

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <LottieView
                    autoPlay={true}
                    loop
                    ref={animation => { this.animation = animation }}
                    source={lottieImage}
                    style={styles.lottieStyle}
                />
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
    lottieStyle: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

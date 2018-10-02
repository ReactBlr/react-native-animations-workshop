/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import lottieImage from '../../../images/lottieImage.json';

export default class LottiePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <TouchableWithoutFeedback onPress={()=>{
                    this.props.navigation.navigate('layoutAnimation')
                }}>
                    <LottieView
                        autoPlay={true}
                        loop
                        ref={animation => { this.animation = animation }}
                        source={lottieImage}
                        style={styles.lottieStyle}
                    />
                </TouchableWithoutFeedback>
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

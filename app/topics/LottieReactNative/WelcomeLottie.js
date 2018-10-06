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

    componentDidMount(){
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Lottie Animation</Text>
                <LottieView
                    autoPlay={false}
                    loop
                    ref={animation => { this.animation = animation }}
                    source={lottieImage}
                    style={styles.lottieStyle}
                />
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('statusBar')
                }}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>>> Navigate to StatusBar</Text>
                    </View>
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
    },
    buttonView: {
        backgroundColor: '#fff',
        marginTop: 40,
        marginHorizontal: 80,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowOpacity:1,
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowRadius: 1,
        elevation: 1,
        shadowColor: '#000'
    },
    buttonText: {
        color: '#262626',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    }
});

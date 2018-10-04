/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, LayoutAnimation, UIManager} from 'react-native';

export default class BasicLayoutAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 50,
            width: 50
        }
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    decrementSize() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState({ height: this.state.height - 50, width: this.state.width - 50 });
    }

    incrementSize() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({ height: this.state.height + 50, width: this.state.width + 50 })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textPosition}>
                    <Text style={{color: '#262626'}}>
                        Current height : <Text style={styles.valueText}>{this.state.height}</Text> and 
                        Current Width : <Text style={styles.valueText}>{this.state.width}</Text> 
                    </Text>
                </View>

                <View style={styles.boxPosition}>
                    <View style={[styles.box,{
                        height: this.state.height,
                        width: this.state.width,
                    }]}>
                    </View>
                </View>

                <View style={styles.footerView}>
                    <TouchableOpacity onPress={() => this.incrementSize()} style={styles.buttonView}>
                        <Text style={{ color: '#fff', paddingVertical: 20, paddingHorizontal: 25 }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.decrementSize()} style={styles.buttonView}>
                        <Text style={{ color: '#fff', paddingVertical: 20, paddingHorizontal: 25 }}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 100,
        alignItems: 'center',
    },
    valueText: { color: '#0000e6', fontWeight: 'bold', fontSize: 15 },
    buttonText: {
        borderRadius: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    textPosition: {
        alignItems: 'center',
    },
    boxPosition: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    box: {
        backgroundColor: 'red',
        borderRadius: 5,
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        flex: 1,
        bottom: 100,
        left: 0,
        right: 0
    },
    buttonView: {
        backgroundColor: '#212121',
        borderRadius: 5,
    }
});

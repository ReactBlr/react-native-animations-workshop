import React, { Component } from "react";
import { View, Text, SafeAreaView, Animated, StyleSheet, TouchableOpacity } from "react-native";
import Animation from 'lottie-react-native';
import LottiePulse from '../../../images/AnimatedPulse.json';

export default class StepComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            level: 1
        }
    }
    
    componentDidMount() {
        this.animation.play();
    }

    componentDidUpdate() {
        this.initAnimation();
    }   

    initAnimation() {
        try {
            if (!this.animation) {
                setTimeout(() => {
                    this.initAnimation();
                }, 0);
            } else {
                this.animation.play();
            }
        } catch (e) {
            console.log(e)
        }
    }

    doPulseAnimation(levelInit){
        if (levelInit >= 3){
            levelInit = levelInit - 3;
        }
        this.setState({ level: levelInit + 1});
    }

    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.labelText}>StepComponent - Lottie Animation</Text>
                
                <View style={styles.statusbar}>
                    {
                        this.state.level == 1? 
                            <View style={styles.outterBar}>
                                <View style={styles.oneResolvedPosition}>
                                    <Animation
                                        ref={(animation) => { this.animation = animation }}
                                        style={styles.disabledIcon}
                                        loop={true}
                                        source={LottiePulse}
                                    />
                                </View>
                                <View style={styles.resolvedBar}>
                                    <View style={styles.resolvedCircle}></View>
                                    <View style={styles.disabledLine}></View>
                                    <View style={styles.disabledCircle}></View>
                                    <View style={styles.disabledLine}></View>
                                    <View style={styles.disabledCircle}></View>
                                </View>
                            </View>
                            : 
                            null
                    }
                    {
                        this.state.level == 2 ?
                            <View style={styles.outterBar}>
                                <View style={styles.resolvedBar}>
                                    <View style={styles.resolvedCircle}></View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.resolvedCircle}></View>
                                    <View style={styles.disabledLine}></View>
                                    <View style={styles.disabledCircle}></View>
                                </View>

                                <View style={styles.middleIconAnimation}>
                                    <View style={styles.middleCircle}>
                                        <Animation
                                            ref={(animation) => { this.animation = animation }}
                                            style={styles.middleIcon}
                                            loop={true}
                                            source={LottiePulse}
                                        />
                                    </View>
                                </View>
                            </View>
                            :
                            null
                    }
                    {
                        this.state.level == 3 ?
                            <View style={styles.outterBar}>
                                <View style={styles.resolvedBar}>
                                    <View style={styles.resolvedCircle}></View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.resolvedCircle}></View>
                                    <View style={styles.lineStyle}></View>
                                    <View style={styles.resolvedCircle}></View>
                                </View>
                                <View style={styles.lottiePosition}>
                                    <Animation
                                        ref={(animation) => { this.animation = animation }}
                                        style={styles.resolvedIcon}
                                        loop={true}
                                        source={LottiePulse}
                                    />
                                </View>
                            </View>
                            :
                            null
                    }
                </View>
                <TouchableOpacity onPress={() => this.doPulseAnimation(this.state.level)} style={styles.buttonView}>
                    <Text style={styles.buttonText}>Change Level</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    parentView: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
    },
    statusbar: {
        backgroundColor: '#000',
        marginVertical: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    outterBar: {
        paddingVertical: 40,
    },
    //3 resolved 
    resolvedBar: {
        flexDirection: 'row',
        flex: 1,
    },
    resolvedCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#26ff00',
    },
    lottiePosition: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -55,
        top: -14,
    },
    resolvedIcon: {
        width: 120,
        height: 120,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //2 resolved
    outterBarMiddle: {
        paddingVertical: 40,
        flexDirection: 'row'
    },
    middleIconAnimation: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    middleCircle: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -55,
    },
    middleIcon: {
        width: 120,
        height: 120,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //1 resolved Circle
    oneResolvedPosition: {
        width: 120,
        height: 120,
        position: 'absolute',
        left: -55,
        top: -14,
    },
    disabledCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#757575',
    },
    disabledIcon: {
        width: 120,
        height: 120,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledLine: {
        borderWidth: 1,
        borderColor: '#757575',
        marginVertical: 4,
        flex: 1,
    },
    barLinegrey: {
        backgroundColor: '#26ff00',
        height: 2,
        marginVertical: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
    },
    barLinePartial: {
        position: 'relative',
        marginVertical: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
    },

    lineStyle: {
        borderWidth: 1,
        borderColor: '#26ff00',
        marginVertical: 4,
        flex: 1,
    },
    lineStyleDisable: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        marginVertical: 4,
        flex: 1,
        alignItems: 'flex-start',
    },
    barLineDisable: {
        backgroundColor: '#dbdbdb',
        height: 2,
        marginVertical: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inlineCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#26ff00',
    },
    inlineCircleDisabled: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#dbdbdb',
    },
    buttonView: {
        backgroundColor: '#fff',
        marginTop: 40,
        marginHorizontal: 80,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowOpacity: 1,
        shadowOffset: {
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
    },
    labelText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    }
});

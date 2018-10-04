import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './topics/HomeScreen';
import LottiePage from './topics/LottieReactNative/LottiePage';
import LayoutAnimation from './topics/layoutAnimations/LayoutAnimations';
import BasicLayoutAnimation from './topics/layoutAnimations/BasicLayoutAnimation';

const AppRoute = createStackNavigator({
    homeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen'
        })
    },
    lottiePage: {
        screen: LottiePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Lottie Page'
        })
    },
    basicAnimation:{
        screen: BasicLayoutAnimation,
        navigationOptions: ({ navigation }) => ({
            title: 'Layout Animations'
        })
    },
    layoutAnimation:{
        screen: LayoutAnimation,
        navigationOptions: ({ navigation}) =>({
            title: 'Layout Animations'
        })
    },
},
    {
        initialRouteName: 'homeScreen'
    });

export default () => (
    <AppRoute />
)

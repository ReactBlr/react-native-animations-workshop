import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './topics/HomeScreen';
import LottiePage from './topics/LottieReactNative/LottiePage';
import LayoutAnimation from './topics/layoutAnimations/LayoutAnimations';

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
    layoutAnimation:{
        screen: LayoutAnimation,
        navigationOptions: ({ navigation}) =>({
            title: 'Layout Animations'
        })
    }
},
    {
        initialRouteName: 'homeScreen'
    });

export default () => (
    <AppRoute />
)

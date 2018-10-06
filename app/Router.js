import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './topics/HomeScreen';
import WelcomeLottie from './topics/LottieReactNative/WelcomeLottie';
import LayoutAnimation from './topics/layoutAnimations/LayoutAnimations';
import WelcomeLayoutAnimation from './topics/layoutAnimations/WelcomeLayoutAnimation';
import StatusBar from './topics/LottieReactNative/StatusBar';

const AppRoute = createStackNavigator({
    homeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen'
        })
    },
    welcomeLottie: {
        screen: WelcomeLottie,
        navigationOptions: ({ navigation }) => ({
            title: 'Welcome Lottie'
        })
    },
    statusBar: {
        screen: StatusBar,
        navigationOptions: ({ navigation }) => ({
            title: 'Lottie Status Bar'
        })
    },
    welcomeLayoutAnimation:{
        screen: WelcomeLayoutAnimation,
        navigationOptions: ({ navigation }) => ({
            title: 'welcome LayoutAnimations'
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

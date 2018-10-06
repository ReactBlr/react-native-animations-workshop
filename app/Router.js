import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './topics/HomeScreen';
import WelcomeLottie from './topics/LottieReactNative/WelcomeLottie';
import LayoutAnimation from './topics/layoutAnimations/LayoutAnimations';
import WelcomeLayoutAnimation from './topics/layoutAnimations/WelcomeLayoutAnimation';
import StepComponent from './topics/LottieReactNative/StepComponent';

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
    stepComponent: {
        screen: StepComponent,
        navigationOptions: ({ navigation }) => ({
            title: 'Lottie StepComponent'
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

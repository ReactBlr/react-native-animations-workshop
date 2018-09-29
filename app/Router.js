import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LottiePage from './topics/layoutAnimations/LottiePage';

const AppRoute = createStackNavigator({
    lottiePage: {
        screen: LottiePage,
        navigationOptions: ({ navigation }) => ({
            title: 'Lottie Page'
        })
    },
},
    {
        initialRouteName: 'lottiePage'
    });

export default () => (
    <AppRoute />
)

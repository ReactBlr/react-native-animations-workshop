/** @format */

import { AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup',
    'Class RCTCxxModule'
]);


AppRegistry.registerComponent(appName, () => App);
